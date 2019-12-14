import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-create-class-level-category',
  templateUrl: './create-class-level-category.component.html',
  styleUrls: ['./create-class-level-category.component.css']
})
export class CreateClassLevelCategoryComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
