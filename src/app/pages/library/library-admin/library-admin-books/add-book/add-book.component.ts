import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromLibraryAuthors from '../../../store/reducers';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
  selectLibraryBookAuthors,
  selectLibraryBookClassifications,
  selectLibraryBookPublishers
} from 'src/app/pages/library/store/selectors/library.selectors';

import {loadBookAuthors} from 'src/app/pages/library/store/actions/library-book-author.actions';
import {loadLibraryBookPublishers} from 'src/app/pages/library/store/actions/library-book-publisher.actions';
import {Observable} from 'rxjs';
import {loadBookClassifications} from 'src/app/pages/library/store/actions/library-book-classification.actions';
import {TabsetComponent} from 'ngx-bootstrap/tabs';
import {LibraryBookTagService} from 'src/app/pages/library/services/library-book-tag.service';
import {LibraryBookService} from 'src/app/pages/library/services/library-book.service';
import {CanComponentDeactivate} from 'src/app/guards/can-deactivate.guard';
import {Router} from '@angular/router';
import {validateISBN} from '../../../validatots/isbn.validator';
import {takeUntil} from 'rxjs/operators';
import {formWithEditorMixin} from '../../../../../shared/mixins/form-with-editor.mixin';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent extends subscribedContainerMixin(formWithEditorMixin()) implements OnInit, CanComponentDeactivate, OnDestroy {
  @ViewChild('staticTabs', {static: false}) staticTabs: TabsetComponent;
  newBookForm: FormGroup = this.fb.group({
    bookTitle: ['', Validators.required],
    authors: [[], [Validators.required]],
    category: ['', [Validators.required]],
    publishers: [[], [Validators.required]],
    tags: [[], []],
    ['ISBN']: ['', [Validators.required, validateISBN]],
    classification: ['', Validators.required],
    publicationDate: [null],
    bookItems: this.fb.array([this.formBookItem])
  });
  bookAuthors$ = this.store.pipe(select(selectLibraryBookAuthors));
  bookPublishers$ = this.store.pipe(select(selectLibraryBookPublishers));
  bookTags$ = this.libraryBookTagService.all$;
  bookClassifications$ = this.store.pipe(select(selectLibraryBookClassifications));
  markTabsWithError: boolean;
  formSubmitted = false;

  constructor(
    private store: Store<fromLibraryAuthors.State>,
    private fb: FormBuilder,
    private libraryBookTagService: LibraryBookTagService,
    private libraryBookService: LibraryBookService,
    // private db: DbService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  get formBookItems(): FormArray {
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
    this.formBookItems.push(this.formBookItem);
    this.formBookItems.updateValueAndValidity();
  }

  removeBookItem(i: number) {
    const confirmedRemoval = confirm('Are you sure you wish to remove book item?');
    if (confirmedRemoval) {
      this.formBookItems.controls.splice(i, 1);
      this.formBookItems.updateValueAndValidity();
    }
  }

  ngOnInit() {

    this.store.dispatch(loadBookAuthors());
    this.store.dispatch(loadLibraryBookPublishers());
    this.store.dispatch(loadBookClassifications());

    // this.db.get('libraryClassifications')
    //   .then((doc: any) => {
    //     this.bookClassifications$ = of(doc.items);
    //     console.log(doc.items)
    //   }).catch(() => {
    //   this.bookClassifications$ = this.store.pipe(select(selectLibraryBookClassifications));
    //   this.bookClassifications$.subscribe(items => {
    //     const doc = {
    //       _id: 'libraryClassifications',
    //       items
    //     };
    //     if (items && items.length > 0) {
    //       this.db.put(doc).then(() => {
    //       }).catch(() => {
    //         alert('error')
    //       });
    //     }
    //   });
    // });

  }

  submitNewBookForm() {
    this.submitInProgressSubject$.next(true);
    this.libraryBookService.save(this.newBookForm.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res) => {
          this.submitInProgressSubject$.next(false);
          this.formSubmitted = true;
          this.router.navigate(['/library', 'books', res.data.id, 'view']).then();
        },
        error: () => {
          this.submitInProgressSubject$.next(false);
          this.formSubmitted = true;
        }
      });
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  validateForm() {
    this.triggerValidationSubject$.next(true);
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
    this.newBookForm.get('ISBN')?.setValue(value);
    this.newBookForm.get('ISBN')?.updateValueAndValidity();
    this.newBookForm.updateValueAndValidity();
    this.cdr.detectChanges();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.newBookForm.dirty && !this.formSubmitted) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }

}
