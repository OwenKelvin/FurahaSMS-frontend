import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';

@Component({
  selector: 'app-academics-curriculum-class-level-categories',
  templateUrl: './academics-curriculum-class-level-categories.component.html',
  styleUrls: ['./academics-curriculum-class-level-categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademicsCurriculumClassLevelCategoriesComponent {

  itemService = this.classLevelCategories;
  constructor(private classLevelCategories: ClassLevelCategoryService) { }

}
