import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-library-admin-books',
  templateUrl: './library-admin-books.component.html',
  styleUrls: ['./library-admin-books.component.css']
})
export class LibraryAdminBooksComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
