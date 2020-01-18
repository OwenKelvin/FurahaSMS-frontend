import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-library-admin-publishers',
  templateUrl: './library-admin-publishers.component.html',
  styleUrls: ['./library-admin-publishers.component.css']
})
export class LibraryAdminPublishersComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
