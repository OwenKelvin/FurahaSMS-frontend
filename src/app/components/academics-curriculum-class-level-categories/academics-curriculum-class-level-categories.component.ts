import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { ClassLevelCategoryInterface } from 'src/app/interfaces/class-level-category.interface';

import {
  CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM,
  EDIT_CLASS_LEVEL_CATEGORY_CURRICULUM,
  VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM
} from 'src/app/helpers/links.helpers';
import { Observable } from 'rxjs';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';

@Component({
  selector: 'app-academics-curriculum-class-level-categories',
  templateUrl: './academics-curriculum-class-level-categories.component.html',
  styleUrls: ['./academics-curriculum-class-level-categories.component.css']
})
export class AcademicsCurriculumClassLevelCategoriesComponent implements OnInit {

  unitCategories$: Observable<ClassLevelCategoryInterface[]>;
  createClassLevelCategoryCurriculum: string;
  editClassLevelCategoryCurriculum: any;
  categories: any;
  viewClassLevelCategoryCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
    private classLevelCategories: ClassLevelCategoryService
  ) { }

  ngOnInit() {
    this.createClassLevelCategoryCurriculum = CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM;
    this.editClassLevelCategoryCurriculum = EDIT_CLASS_LEVEL_CATEGORY_CURRICULUM;
    this.viewClassLevelCategoryCurriculum = VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM;
    this.categories = this.classLevelCategories;

  }

}
