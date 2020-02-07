import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-edit-unit-category',
  templateUrl: './edit-unit-category.component.html',
  styleUrls: ['./edit-unit-category.component.css']
})
export class EditUnitCategoryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
