
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  newBookAuthorForm: FormGroup;
  editPage: boolean;
  componentIsActive: boolean;
  constructor(
    private libraryAuthor: LibraryAuthorService,
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryAuthorService: LibraryAuthorService,
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.newBookAuthorForm = this.fb.group({
      id: [0, []],
      name: ['', [Validators.required]],
      biography: ['']
    });
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(params => {
      const id = +params.get('id');
      if (id > 0) {
        this.editPage = true;
        this.isLoading = true;
        this.libraryAuthorService.getAuthorWithId(id)
          .pipe(takeWhile(() => this.componentIsActive))
          .subscribe(author => {
          const authorConverted = author as { name: string, id: string, biography: string; };
          this.newBookAuthorForm.get('id').setValue(authorConverted.id);
          this.newBookAuthorForm.get('name').setValue(authorConverted.name);
          this.isLoading = false;
        });
      }
    });
  }

  submitNewBookAuthorForm() {
    this.isSubmitting = true;
    this.libraryAuthor.save(this.newBookAuthorForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
      this.isSubmitting = false;
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true,
        toastBody: res.message,
        toastHeader: 'Success'
      }));
      this.router.navigate(['library', 'admin', 'authors', res.data.id, 'view']);
    }, err => {
      this.isSubmitting = false;
    });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
