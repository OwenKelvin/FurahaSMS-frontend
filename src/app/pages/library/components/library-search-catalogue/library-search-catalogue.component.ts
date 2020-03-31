import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LibraryAuthorService } from '../../services/library-author.service';
import { Observable, pipe } from 'rxjs';
import { LibraryBookService } from '../../services/library-book.service';
import { LibraryPublisherService } from '../../services/library-publisher.service';
import { takeWhile, tap } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { loadLibraryBooksSuccess } from '../../store/actions/library-book.actions';

@Component({
  selector: 'app-library-search-catalogue',
  templateUrl: './library-search-catalogue.component.html',
  styleUrls: ['./library-search-catalogue.component.css']
})
export class LibrarySearchCatalogueComponent implements OnInit, OnDestroy {
  searchParamsForm: FormGroup;
  authors$: Observable<any>;
  books$: Observable<any[]>;
  publishers$: Observable<any>;
  titles$: Observable<any>;
  isSubmitting: boolean;
  books: any[];
  componentIsActive: boolean;
  bookSearched: boolean;

  constructor(
    private fb: FormBuilder, private store: Store<fromStore.AppState>,
    private authorsService: LibraryAuthorService,
    private booksService: LibraryBookService,
    private publisherservice: LibraryPublisherService,
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.bookSearched = false;
    this.clearForm();
    this.authors$ = this.authorsService.filter(this.author.value);
    this.titles$ = this.booksService.filter({ title: this.title.value });
    this.publishers$ = this.publisherservice.filter(this.publisher.value);
  }
  clearForm() {
    this.searchParamsForm = this.fb.group({
      title: [''],
      author: [''],
      publisher: [''],
    });
  }
  get author(): FormControl {
    return this.searchParamsForm.get('author') as FormControl;
  }
  get publisher(): FormControl {
    return this.searchParamsForm.get('publisher') as FormControl;
  }
  get title(): FormControl {
    return this.searchParamsForm.get('title') as FormControl;
  }
  submitSearchParamsForm() {
    this.isSubmitting = true;
    this.books$ = this.booksService.filter(this.searchParamsForm.value);
    this.books$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe({
        next: books => {
          console.log(books)
          this.books = books;
          this.store.dispatch(loadLibraryBooksSuccess({ data: books }));
        },
        complete: () => {
          this.bookSearched = true;
          this.isSubmitting = false;
        }
      });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
