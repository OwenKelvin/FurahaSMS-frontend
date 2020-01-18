import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-library-admin-authors',
  templateUrl: './library-admin-authors.component.html',
  styleUrls: ['./library-admin-authors.component.css']
})
export class LibraryAdminAuthorsComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
