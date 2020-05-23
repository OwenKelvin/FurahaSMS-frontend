import { Component, OnInit } from '@angular/core';
import { ClassLevelCategoryInterface } from 'src/app/interfaces/class-level-category.interface';

import { Observable } from 'rxjs';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';

@Component({
  selector: 'app-academics-curriculum-class-level-categories',
  templateUrl: './academics-curriculum-class-level-categories.component.html',
  styleUrls: ['./academics-curriculum-class-level-categories.component.css']
})
export class AcademicsCurriculumClassLevelCategoriesComponent implements OnInit {

  unitCategories$: Observable<ClassLevelCategoryInterface[]>;
  categories: any;
  constructor(
    private classLevelCategories: ClassLevelCategoryService
  ) { }

  ngOnInit() {
    
    this.categories = this.classLevelCategories;

  }

}
