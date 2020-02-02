import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LibraryAuthorService } from '../../services/library-author.service';
import { Observable } from 'rxjs';
import { LibraryBookService } from '../../services/library-book.service';
import { LibraryPublisherService } from '../../services/library-publisher.service';

@Component({
  selector: 'app-library-search-catalogue',
  templateUrl: './library-search-catalogue.component.html',
  styleUrls: ['./library-search-catalogue.component.css']
})
export class LibrarySearchCatalogueComponent implements OnInit {
  searchParamsForm: FormGroup;
  authors$: Observable<any>;
  books$: Observable<any[]>;
  publishers$: Observable<any>;
  titles$: Observable<any>;
  isSubmitting: boolean;
  books: any;

  constructor(
    private fb: FormBuilder, private store: Store<fromStore.AppState>,
    private authorsService: LibraryAuthorService,
    private booksService: LibraryBookService,
    private publisherservice: LibraryPublisherService
  ) { }

  ngOnInit() {
    this.searchParamsForm = this.fb.group({
      title: [''],
      author: [''],
      publisher: [''],
    });
    this.authors$ = this.authorsService.filter(this.author.value);
    this.titles$ = this.booksService.filter({ title: this.title.value});
    this.publishers$ = this.publisherservice.filter(this.publisher.value);
  }
  get author(): FormControl {
    return <FormControl>this.searchParamsForm.get('author')
  }
  get publisher(): FormControl {
    return <FormControl>this.searchParamsForm.get('publisher')
  }
  get title(): FormControl {
    return <FormControl>this.searchParamsForm.get('title')
  }
  submitSearchParamsForm() {
    this.isSubmitting = true;
    this.books$ = this.booksService.filter(this.searchParamsForm.value);
    this.books$.subscribe(books => {
      this.books = books;
      this.isSubmitting = false;
    });
  }
}
