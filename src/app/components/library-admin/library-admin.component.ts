import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-library-admin',
  templateUrl: './library-admin.component.html',
  styleUrls: ['./library-admin.component.css']
})
export class LibraryAdminComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
