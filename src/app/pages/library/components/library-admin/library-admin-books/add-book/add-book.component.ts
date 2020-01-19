import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLibraryAuthors from '../../../../store/reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectLibraryBookAuthors, selectLibraryBookPublishers } from 'src/app/pages/library/store/selectors/library.selectors';

import { loadBookAuthors } from 'src/app/pages/library/store/actions/library-book-author.actions';
import { loadLibraryBookPublishers } from 'src/app/pages/library/store/actions/library-book-publisher.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  bookAuthors$: Observable<any>;
  bookPublishers$: Observable<any>;
  constructor(
    private store: Store<fromLibraryAuthors.State>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.newBookForm = this.fb.group({
      bookTitle: ['', Validators.required],
      authors: [[], []],
      category: ['', Validators.required],
      publishers: [[], []],
      tags: [[], []],
      ISBN: [''],
      publicationDate: [null]
    });
    this.store.dispatch(loadBookAuthors());
    this.store.dispatch(loadLibraryBookPublishers());
    this.bookAuthors$ = this.store.pipe(select(selectLibraryBookAuthors));
    this.bookPublishers$ = this.store.pipe(select(selectLibraryBookPublishers));
  }
  submitNewBookForm() {
    this.isSubmitting = true;
  }

}
