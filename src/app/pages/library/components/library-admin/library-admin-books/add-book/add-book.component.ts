import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLibraryAuthors from '../../../../store/reducers';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
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
import * as PouchDB from 'pouchdb/dist/pouchdb';
import { LibraryBookClassificationService } from 'src/app/pages/library/services/library-book-classification.service';
import { DbService } from 'src/app/services/db.service';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { LibraryBookService } from 'src/app/pages/library/services/library-book.service';

const validateISBN = (c: FormControl) => {
  let ISBN_REGEXP = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
  const subject = c.value;
  if (ISBN_REGEXP.test(subject)) {
    // Remove non ISBN digits, then split into an array
    var chars = subject.replace(/[- ]|^ISBN(?:-1[03])?:?/g, "").split("");
    // Remove the final ISBN digit from `chars`, and assign it to `last`
    var last = chars.pop();
    var sum = 0;
    var check, i;

    if (chars.length == 9) {
      // Compute the ISBN-10 check digit
      chars.reverse();
      for (i = 0; i < chars.length; i++) {
        sum += (i + 2) * parseInt(chars[i], 10);
      }
      check = 11 - (sum % 11);
      if (check == 10) {
        check = "X";
      } else if (check == 11) {
        check = "0";
      }
    } else {
      // Compute the ISBN-13 check digit
      for (i = 0; i < chars.length; i++) {
        sum += (i % 2 * 2 + 1) * parseInt(chars[i], 10);
      }
      check = 10 - (sum % 10);
      if (check == 10) {
        check = "0";
      }
    }

    if (check == last) {
      return null;
    } else {
      return {
        validateISBN: {
          valid: false
        }
      };
    }
  } else {
    return {
      validateISBN: {
        valid: false
      }
    };
  }
};

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  bookAuthors$: Observable<any[]>;
  bookPublishers$: Observable<any[]>;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  bookClassifications$: Observable<any[]>;
  markTabsWithError: boolean;
  bookTags$: Observable<any>;
  constructor(
    private store: Store<fromLibraryAuthors.State>,
    private fb: FormBuilder,
    private libraryBookClassificationService: LibraryBookClassificationService,
    
    private libraryBookTagService: LibraryBookTagService,
    private libraryBookService: LibraryBookService,
    private db: DbService
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

    // this.addBookItem();

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
            items: items
          };
          if (items.length > 0) {
            this.db.put(doc).then(() => { }).catch(e => console.log("Data Retrieved from Cache"));
          }
        });
      });

  }
  submitNewBookForm() {
    this.isSubmitting = true;
    this.libraryBookService.save(this.newBookForm.value).subscribe(res => console.log(res))
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

}
