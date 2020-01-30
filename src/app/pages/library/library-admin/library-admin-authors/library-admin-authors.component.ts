import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';
import { CREATE_LIBRARY_AUTHOR, EDIT_LIBRARY_AUTHOR, VIEW_LIBRARY_AUTHOR } from 'src/app/helpers/links.helpers';

@Component({
  selector: 'app-library-admin-authors',
  templateUrl: './library-admin-authors.component.html',
  styleUrls: ['./library-admin-authors.component.css']
})
export class LibraryAdminAuthorsComponent implements OnInit {
  categories: LibraryAuthorService;
  createAuthor: string;
  editAuthor: (id: string | number) => string;
  viewAuthor: (id: string | number) => string;

  constructor(private store: Store<fromStore.AppState>, private authorService: LibraryAuthorService) { }

  ngOnInit() {
    this.categories = this.authorService;
    this.createAuthor = CREATE_LIBRARY_AUTHOR;
    this.editAuthor = EDIT_LIBRARY_AUTHOR;
    this.viewAuthor = VIEW_LIBRARY_AUTHOR;
  }

}
