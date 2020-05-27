import { Component } from '@angular/core';
import { UnitCategoryService } from 'src/app/services/unit-category.service';

@Component({
  selector: 'app-academics-curriculum-unit-categories',
  templateUrl: './academics-curriculum-unit-categories.component.html',
  styleUrls: ['./academics-curriculum-unit-categories.component.css']
})
export class AcademicsCurriculumUnitCategoriesComponent {

  itemService = this.unitCategoryService;
  constructor(private unitCategoryService: UnitCategoryService) { }
}
