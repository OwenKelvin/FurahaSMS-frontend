import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLibraryAuthors from '../../../store/reducers';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {
  selectLibraryBookAuthors,
  selectLibraryBookPublishers,
  selectLibraryBookClassifications
} from 'src/app/pages/library/store/selectors/library.selectors';

import { loadBookAuthors } from 'src/app/pages/library/store/actions/library-book-author.actions';
import { loadLibraryBookPublishers } from 'src/app/pages/library/store/actions/library-book-publisher.actions';
import { Observable, of } from 'rxjs';
import { loadBookClassifications } from 'src/app/pages/library/store/actions/library-book-classification.actions';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { LibraryBookClassificationService } from 'src/app/pages/library/services/library-book-classification.service';
import { DbService } from 'src/app/services/db.service';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { LibraryBookService } from 'src/app/pages/library/services/library-book.service';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { validateISBN } from '../../../validatots/isbn.validator';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, CanComponentDeactivate, OnDestroy {

  newBookForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  bookAuthors$: Observable<any[]>;
  bookPublishers$: Observable<any[]>;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  bookClassifications$: Observable<any[]>;
  markTabsWithError: boolean;
  bookTags$: Observable<any>;
  formSubmitted: boolean;
  componentIsActive: boolean;
  constructor(
    private store: Store<fromLibraryAuthors.State>,
    private fb: FormBuilder,
    private libraryBookClassificationService: LibraryBookClassificationService,

    private libraryBookTagService: LibraryBookTagService,
    private libraryBookService: LibraryBookService,
    private db: DbService,
    private router: Router
  ) { }

  get formbookItems(): FormArray {
    return this.newBookForm.get('bookItems') as FormArray;
  }
  get formBookItem(): FormGroup {
    return this.fb.group({
      ref: ['', [Validators.required]],
      dateProcured: ['', [Validators.required]],
      reserved: [false]
    });
  }

  addBookItem() {
    this.formbookItems.push(this.formBookItem);
    this.formbookItems.updateValueAndValidity();
  }
  removeBookItem(i) {
    const confirmedRemoval = confirm('Are you sure you wish to remove book item?');
    if (confirmedRemoval) {
      this.formbookItems.controls.splice(i, 1);
      this.formbookItems.updateValueAndValidity();
    }
  }

  ngOnInit() {
    this.componentIsActive = true;
    this.isSubmitting = false;
    this.newBookForm = this.fb.group({
      bookTitle: ['', Validators.required],
      authors: [[], [Validators.required]],
      category: ['', [Validators.required]],
      publishers: [[], [Validators.required]],
      tags: [[], []],
      ISBN: ['', [Validators.required, validateISBN]],
      classification: ['', Validators.required],
      publicationDate: [null],
      bookItems: this.fb.array([this.formBookItem])
    });

    this.store.dispatch(loadBookAuthors());
    this.store.dispatch(loadLibraryBookPublishers());
    this.store.dispatch(loadBookClassifications());
    this.bookAuthors$ = this.store.pipe(select(selectLibraryBookAuthors));
    this.bookPublishers$ = this.store.pipe(select(selectLibraryBookPublishers));
    this.bookTags$ = this.libraryBookTagService.getAll();

    this.bookClassifications$ = this.store.pipe(select(selectLibraryBookClassifications));


    this.db.get('categories')
      .then(doc => {
        this.bookClassifications$ = of(doc.items);
      }).catch(e => {
        this.bookClassifications$ = this.store.pipe(select(selectLibraryBookClassifications));
        this.bookClassifications$.subscribe(items => {
          const doc = {
            _id: 'categories',
            items
          };
          if (items.length > 0) {
            this.db.put(doc).then(() => { }).catch(err => console.log('Data Retrieved from Cache'));
          }
        });
      });

  }
  submitNewBookForm() {
    this.isSubmitting = true;
    this.libraryBookService.save(this.newBookForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
      this.store.dispatch(loadToastShowsSuccess({
        showMessage: true, toastBody: res.message, toastHeader: 'Successful', toastTime: 'just now'
      }));
      this.isSubmitting = false;
      this.formSubmitted = true;
      this.router.navigate(['/library', 'books', res.data.id, 'view']);
    }, error => {
      this.formSubmitted = true;
      this.isSubmitting = false;
    });
    this.libraryBookService.save(this.newBookForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.isSubmitting = false;
      }, err => this.isSubmitting = false);
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  validateForm() {
    this.triggerValidation = !this.triggerValidation,
      this.markTabsWithError = true;
  }

  get generalInfoHasError() {

    return !['bookTitle', 'ISBN', 'authors', 'publishers', 'publicationDate']
      .every(item => this.newBookForm.get(item).valid);
  }

  get classificationInfoHasError() {
    return !['category', 'tags', 'classification']
      .every(item => this.newBookForm.get(item).valid);
  }

  get bookItemsHasError() {
    return !['bookItems']
      .every(item => this.newBookForm.get(item).valid);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.newBookForm.dirty && this.formSubmitted === false) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
