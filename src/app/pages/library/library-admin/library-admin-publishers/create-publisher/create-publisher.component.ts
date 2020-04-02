import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { map, mergeMap, takeWhile, tap, filter } from 'rxjs/operators';
import { selectTinyMceConfig } from 'src/app/store/selectors/tinyMCE-config.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-publisher',
  templateUrl: './create-publisher.component.html',
  styleUrls: ['./create-publisher.component.css']
})
export class CreatePublisherComponent implements OnInit {

  isLoading: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  newBookPublisherForm: FormGroup;
  editPage: boolean;
  componentIsActive: boolean;
  profPicLoading: false;
  editorInit$: Observable<any>;
  editorInit: any;
  editorInitialized: boolean;
  photoFile: File;
  constructor(
    private libraryPublisher: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryPublisherService: LibraryPublisherService,
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.editorInit$ = this.store.pipe(select(selectTinyMceConfig));
    this.editorInit$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(conf => { this.editorInit = conf; })
    this.resetForm();
    this.route.paramMap
      .pipe(
        map(params => Number(params.get('id'))),
        filter(id => id > 0),
        tap(() => this.isLoading = true),
        tap(() => this.editPage = true),
        mergeMap(id => this.libraryPublisherService.getPublisherWithId(id)),
        takeWhile(() => this.componentIsActive)
      )
      .subscribe({
        next: (publisher: any) => {
          this.newBookPublisherForm.setValue({
            id: publisher.id,
            name: publisher.name,
            biography: publisher.biography
          });
        },
        complete: () => this.isLoading = false
      });
  }
  
  onFileSelected() {
    const $input: any = document.querySelector('#profilePhotoInput');
    const $canvas: HTMLImageElement = document.querySelector('#profilePhotoCanvas') as HTMLImageElement;
    this.photoFile = $input?.files[0];
    $canvas.src = URL.createObjectURL(this.photoFile);
  }

  resetForm() {
    this.newBookPublisherForm = this.fb.group({
      id: [0, []],
      name: ['', [Validators.required]],
      biography: ['']
    });
  }

  submitNewBookPublisherForm() {
    this.isSubmitting = true;
    
    if (this.newBookPublisherForm.invalid) {
      alert('Form is not fully filled')
      return;
    }
    
    return this.libraryPublisher.save(this.newBookPublisherForm.value, this.photoFile)
      .subscribe({
        next: res => {
          this.isSubmitting = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success',
            toastTime: 'Just Now'
          }));
          this.router.navigate(['library', 'admin', 'publishers', res.data.id, 'view']);
        },
        complete: () => this.isSubmitting = false
      });
  }

}
