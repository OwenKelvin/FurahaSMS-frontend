import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLibraryAuthors from '../../../store/reducers';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
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
import { DbService } from 'src/app/services/db.service';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { LibraryBookService } from 'src/app/pages/library/services/library-book.service';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
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
  isSubmitting = false;
  bookAuthors$: Observable<any[] | null>;
  bookPublishers$: Observable<any[] | null>;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  bookClassifications$: Observable<any[] | null>;
  markTabsWithError: boolean;
  bookTags$: Observable<any | null>;
  formSubmitted = false;
  componentIsActive = true;
  constructor(
    private store: Store<fromLibraryAuthors.State>,
    private fb: FormBuilder,

    private libraryBookTagService: LibraryBookTagService,
    private libraryBookService: LibraryBookService,
    private db: DbService,
    private router: Router,
    private cdr: ChangeDetectorRef
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
  removeBookItem(i: number) {
    const confirmedRemoval = confirm('Are you sure you wish to remove book item?');
    if (confirmedRemoval) {
      this.formbookItems.controls.splice(i, 1);
      this.formbookItems.updateValueAndValidity();
    }
  }

  ngOnInit() {

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
    this.bookTags$ = this.libraryBookTagService.all$;

    this.bookClassifications$ = this.store.pipe(select(selectLibraryBookClassifications));


    this.db.get('categories')
      .then((doc: any) => {
        this.bookClassifications$ = of(doc.items);
      }).catch(() => {
        this.bookClassifications$ = this.store.pipe(select(selectLibraryBookClassifications));
        this.bookClassifications$.subscribe(items => {
          const doc = {
            _id: 'categories',
            items
          };
          if (items && items.length > 0) {
            this.db.put(doc).then(() => { }).catch(() => {});
          }
        });
      });

  }
  submitNewBookForm() {
    this.isSubmitting = true;
    this.libraryBookService.save(this.newBookForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
      this.isSubmitting = false;
      this.formSubmitted = true;
      this.router.navigate(['/library', 'books', res.data.id, 'view']);
    }, () => {
      this.formSubmitted = true;
      this.isSubmitting = false;
    });
    this.libraryBookService.save(this.newBookForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
        this.isSubmitting = false;
      }, () => this.isSubmitting = false);
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
      .every(item => (this.newBookForm.get(item) as FormControl).valid);
  }

  get classificationInfoHasError() {
    return !['category', 'tags', 'classification']
      .every(item => (this.newBookForm.get(item) as FormControl).valid);
  }

  get bookItemsHasError() {
    return !['bookItems']
      .every(item => (this.newBookForm.get(item) as FormControl).valid);
  }
  updateISBN(value: any) {
    this.newBookForm.get('ISBN')?.setValue(value)
    this.newBookForm.get('ISBN')?.updateValueAndValidity();
    this.newBookForm.updateValueAndValidity();
    this.cdr.detectChanges()
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
