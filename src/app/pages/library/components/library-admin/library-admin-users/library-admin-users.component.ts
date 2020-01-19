import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../../store/reducers';

@Component({
  selector: 'app-library-admin-users',
  templateUrl: './library-admin-users.component.html',
  styleUrls: ['./library-admin-users.component.css']
})
export class LibraryAdminUsersComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
