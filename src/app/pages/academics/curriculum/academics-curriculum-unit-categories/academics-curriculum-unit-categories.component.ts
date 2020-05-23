import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { UnitCategoryInterface } from 'src/app/interfaces/unit-category.interface';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-academics-curriculum-unit-categories',
  templateUrl: './academics-curriculum-unit-categories.component.html',
  styleUrls: ['./academics-curriculum-unit-categories.component.css']
})
export class AcademicsCurriculumUnitCategoriesComponent implements OnInit {

  unitCategories$: Observable<UnitCategoryInterface[]>;
  
  categories: any;
  constructor(
    private store: Store<AppState>,
    private subjectCategories: UnitCategoryService
  ) { }

  ngOnInit() {
    
    this.categories = this.subjectCategories;
  }

}
