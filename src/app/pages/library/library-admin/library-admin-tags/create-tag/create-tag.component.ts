import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { AppState } from 'src/app/store/reducers';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {

  isLoading: boolean;
  isSubmitting: boolean;
  triggerValidation: boolean;
  newBookTagForm: FormGroup;
  editPage: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryTagService: LibraryBookTagService,
  ) { }

  ngOnInit() {

    this.newBookTagForm = this.fb.group({
      id: [0, []],
      name: ['', [Validators.required]],
    });
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if (id > 0) {
        this.editPage = true;
        this.isLoading = true;
        const sub = this.libraryTagService.getTagWithId(id).subscribe(tag => {
          const tagConverted = tag as { name: string, id: string, biography: string; };
          this.newBookTagForm.get('id').setValue(tagConverted.id);
          this.newBookTagForm.get('name').setValue(tagConverted.name);
          this.isLoading = false;
          sub.unsubscribe();
        });
      }
    });
  }

  submitNewBookTagForm() {
    this.isSubmitting = true;
    this.libraryTagService.save(this.newBookTagForm.value).subscribe(res => {
      this.isSubmitting = false;
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true,
        toastBody: res.message,
        toastHeader: 'Success'
      }));
      this.router.navigate(['library', 'admin', 'tags', res.data.id, 'view']);
    }, err => {
      this.isSubmitting = false;
    });
  }

}
