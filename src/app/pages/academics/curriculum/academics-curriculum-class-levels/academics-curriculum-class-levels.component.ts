import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { ClassLevelCategoryInterface } from 'src/app/interfaces/class-level-category.interface';

import {
  CREATE_CLASS_LEVEL_CURRICULUM,
  EDIT_CLASS_LEVEL_CURRICULUM,
  VIEW_CLASS_LEVEL_CURRICULUM
} from 'src/app/helpers/links.helpers';
import { Observable } from 'rxjs';
import { ClassLevelService } from 'src/app/services/class-level.service';


@Component({
  selector: 'app-academics-curriculum-class-levels',
  templateUrl: './academics-curriculum-class-levels.component.html',
  styleUrls: ['./academics-curriculum-class-levels.component.css']
})
export class AcademicsCurriculumClassLevelsComponent implements OnInit {

  unitCategories$: Observable<ClassLevelCategoryInterface[]>;
  createClassLevelCurriculum: string;
  editClassLevelCurriculum: any;
  viewClassLevelCurriculum: any;
  categories: any;
  viewClassLevelCategoryCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
    private classLevelService: ClassLevelService
  ) { }

  ngOnInit() {
    this.createClassLevelCurriculum = CREATE_CLASS_LEVEL_CURRICULUM;
    this.editClassLevelCurriculum = EDIT_CLASS_LEVEL_CURRICULUM;
    this.viewClassLevelCurriculum = VIEW_CLASS_LEVEL_CURRICULUM ;
    this.categories = { ...this.classLevelService, getAll: this.classLevelService.getAll, deleteItem: this.classLevelService.delete };

  }

}
