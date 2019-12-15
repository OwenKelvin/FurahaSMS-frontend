import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-edit-class-level-category',
  templateUrl: './edit-class-level-category.component.html',
  styleUrls: ['./edit-class-level-category.component.css']
})
export class EditClassLevelCategoryComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
