
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../../store/reducers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  isLoading: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  newBookAuthorForm: FormGroup;
  editPage: boolean;
  constructor(
    private libraryAuthor: LibraryAuthorService,
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryAuthorService: LibraryAuthorService,
  ) { }

  ngOnInit() {

    this.newBookAuthorForm = this.fb.group({
      id: [0, []],
      name: ['', [Validators.required]],
      biography: ['']
    });
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id > 0) {
        this.editPage = true;
        this.isLoading = true;
        const sub = this.libraryAuthorService.getAuthorWithId(id).subscribe(author => {
          const authorConverted = author as { name: string, id: string, biography: string; };
          this.newBookAuthorForm.get('id').setValue(authorConverted.id);
          this.newBookAuthorForm.get('name').setValue(authorConverted.name);
          this.isLoading = false;
          sub.unsubscribe();
        });
      }
    });
  }

  submitNewBookAuthorForm() {
    this.isSubmitting = true;
    this.libraryAuthor.save(this.newBookAuthorForm.value).subscribe(res => {
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

}
