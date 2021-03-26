import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LibraryAuthorService} from 'src/app/pages/library/services/library-author.service';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {formWithEditorMixin} from '../../../../../shared/mixins/form-with-editor.mixin';
import {from} from 'rxjs';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent extends subscribedContainerMixin(formWithEditorMixin()) {

  newBookAuthorForm: FormGroup = this.fb.group({
    id: [0, []],
    name: ['', [Validators.required]],
    biography: ['']
  });
  authorId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  editPage$ = this.authorId$.pipe(map(id => id > 0));
  author$ = this.authorId$.pipe(
    mergeMap(id => id > 0 ? this.libraryAuthorService.getAuthorWithId(id) : from([{id: 0, name: '', biography: ''}])),
    tap((res: any) => this.newBookAuthorForm.patchValue({
      id: res.id,
      name: res.name,
      biography: res.biography
    }))
  );

  constructor(
    private libraryAuthor: LibraryAuthorService,
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryAuthorService: LibraryAuthorService,
  ) {
    super();
  }

  submitNewBookAuthorForm() {
    this.submitInProgressSubject$.next(true);
    this.libraryAuthor.save(this.newBookAuthorForm.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res) => this.router.navigate(['library', 'admin', 'authors', res.data.id, 'view']),
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

}
