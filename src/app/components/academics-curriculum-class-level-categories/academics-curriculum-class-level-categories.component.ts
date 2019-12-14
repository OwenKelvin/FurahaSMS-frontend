import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { UnitCategoryInterface } from 'src/app/interfaces/unit-category.interface';
import { SubjectCategoryService } from 'src/app/services/subject-category.service';
import {
  CREATE_UNIT_CATEGORY_CURRICULUM,
  EDIT_UNIT_CATEGORY_CURRICULUM,
  VIEW_UNIT_CATEGORY_CURRICULUM
} from 'src/app/helpers/links.helpers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-academics-curriculum-class-level-categories',
  templateUrl: './academics-curriculum-class-level-categories.component.html',
  styleUrls: ['./academics-curriculum-class-level-categories.component.css']
})
export class AcademicsCurriculumClassLevelCategoriesComponent implements OnInit {

  unitCategories: UnitCategoryInterface[];
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  viewUnitCategoryCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
    private subjectCategories: SubjectCategoryService
  ) { }

  ngOnInit() {
    this.createUnitCategoryCurriculum = CREATE_UNIT_CATEGORY_CURRICULUM;
    this.editUnitCategoryCurriculum = EDIT_UNIT_CATEGORY_CURRICULUM;
    this.viewUnitCategoryCurriculum = VIEW_UNIT_CATEGORY_CURRICULUM;
    this.getItems();
  }
  getItems(): void {
    this.subjectCategories.getAll().pipe(map(res => {
      if (!res) {
        res = [];
      }
      return res.map(item => {
        return { ...item, description: item.description ? item.description : 'No Description Available!' };
      });
    })).subscribe(items => {
      this.unitCategories = items;
    });
  }
  deleteSubjectCategory(category): void {
    const toBeDeleted = this.unitCategories.find(item => item.id === category);
    const deletionConfirmed = confirm('Are you sure you wish to delete' + toBeDeleted.name);
    if (deletionConfirmed) {
      this.subjectCategories.deleteItem(toBeDeleted.id).subscribe(res => {
        this.getItems();
      });
    }
  }

}
