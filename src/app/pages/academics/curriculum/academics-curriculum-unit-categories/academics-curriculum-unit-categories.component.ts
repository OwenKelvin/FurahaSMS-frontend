import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { UnitCategoryInterface } from 'src/app/interfaces/unit-category.interface';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import {
  CREATE_UNIT_CATEGORY_CURRICULUM,
  EDIT_UNIT_CATEGORY_CURRICULUM,
  VIEW_UNIT_CATEGORY_CURRICULUM
} from 'src/app/helpers/links.helpers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-academics-curriculum-unit-categories',
  templateUrl: './academics-curriculum-unit-categories.component.html',
  styleUrls: ['./academics-curriculum-unit-categories.component.css']
})
export class AcademicsCurriculumUnitCategoriesComponent implements OnInit {

  unitCategories$: Observable<UnitCategoryInterface[]>;
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  categories: any;
  viewUnitCategoryCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
    private subjectCategories: UnitCategoryService
  ) { }

  ngOnInit() {
    this.createUnitCategoryCurriculum = CREATE_UNIT_CATEGORY_CURRICULUM;
    this.editUnitCategoryCurriculum = EDIT_UNIT_CATEGORY_CURRICULUM;
    this.viewUnitCategoryCurriculum = VIEW_UNIT_CATEGORY_CURRICULUM;
    this.categories = this.subjectCategories;
  }

}
