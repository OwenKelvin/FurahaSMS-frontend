import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-library-my-account',
  templateUrl: './library-my-account.component.html',
  styleUrls: ['./library-my-account.component.css']
})
export class LibraryMyAccountComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
