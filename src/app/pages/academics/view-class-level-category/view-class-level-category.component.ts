import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-view-class-level-category',
  templateUrl: './view-class-level-category.component.html',
  styleUrls: ['./view-class-level-category.component.css']
})
export class ViewClassLevelCategoryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
