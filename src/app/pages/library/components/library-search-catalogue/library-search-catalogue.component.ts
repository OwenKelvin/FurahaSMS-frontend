import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';

@Component({
  selector: 'app-library-search-catalogue',
  templateUrl: './library-search-catalogue.component.html',
  styleUrls: ['./library-search-catalogue.component.css']
})
export class LibrarySearchCatalogueComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
