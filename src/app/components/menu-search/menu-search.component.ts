import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private store: Store<fromStore.AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

}
