import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LibraryPublisherService} from 'src/app/pages/library/services/library-publisher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {selectLibraryBookPublisher} from '../../../store/selectors/library.selectors';
import {CanvasService} from 'src/app/services/canvas.service';
import {formWithEditorMixin} from '../../../../../shared/mixins/form-with-editor.mixin';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-create-publisher',
  templateUrl: './create-publisher.component.html',
  styleUrls: ['./create-publisher.component.css']
})
export class CreatePublisherComponent extends subscribedContainerMixin(formWithEditorMixin()) implements AfterViewInit {
  @ViewChild('profilePicImgTag') profilePicImgTag: ElementRef;
  newBookPublisherForm: FormGroup = this.fb.group({
    id: [0, []],
    name: ['', [Validators.required]],
    biography: ['']
  });
  editPage: boolean;
  profPicLoading: false;
  photoFile: File;
  profPicId: any;
  publisherId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.libraryPublisherService.loadItem(id)),
  );
  publisher$ = this.publisherId$.pipe(
    mergeMap(id => this.store.pipe(select(selectLibraryBookPublisher(id)))),
    filter(publisher => publisher),
    tap(publisher => this.profPicId = publisher.profile_pic_id),
    tap(publisher => this.newBookPublisherForm.patchValue({
      id: publisher.id,
      name: publisher.name,
      biography: publisher.biography
    }))
  );
  v$ = combineLatest([this.editorInitializedAction$, this.publisher$]).pipe(
    map((editorInitialized, publisher) => ({editorInitialized, publisher}))
  );

  constructor(
    private libraryPublisher: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryPublisherService: LibraryPublisherService,
    private canvasService: CanvasService
  ) {
    super();
  }

  ngAfterViewInit() {
    this.canvasService.getProfilePicture({fileId: this.profPicId})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        (this.profilePicImgTag.nativeElement as HTMLImageElement).src = URL.createObjectURL(res);
      });
  }

  onFileSelected() {
    const $input: any = document.querySelector('#profilePhotoInput');
    const $canvas: HTMLImageElement = document.querySelector('#profilePhotoCanvas') as HTMLImageElement;
    this.photoFile = $input?.files[0];
    $canvas.src = URL.createObjectURL(this.photoFile);
  }

  submitNewBookPublisherForm() {
    this.submitInProgressSubject$.next(true);

    if (this.newBookPublisherForm.invalid) {
      alert('Form is not fully filled');
      return;
    }

    return this.libraryPublisher.save(this.newBookPublisherForm.value, this.photoFile)
      .subscribe({
        next: res => this.router.navigate(['library', 'admin', 'publishers', res.data.id, 'view']).then(),
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

}
