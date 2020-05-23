import { Component, OnInit } from '@angular/core';
import { ClassLevelCategoryInterface } from 'src/app/interfaces/class-level-category.interface';
import { Observable } from 'rxjs';
import { ClassLevelService } from 'src/app/services/class-level.service';


@Component({
  selector: 'app-academics-curriculum-class-levels',
  templateUrl: './academics-curriculum-class-levels.component.html',
  styleUrls: ['./academics-curriculum-class-levels.component.css']
})
export class AcademicsCurriculumClassLevelsComponent implements OnInit {
  unitCategories$: Observable<ClassLevelCategoryInterface[]>;
  categories: any;
  viewClassLevelCategoryCurriculum: (id: string | number) => string;
  constructor(
    private classLevelService: ClassLevelService
  ) { }

  ngOnInit() {
    this.categories = { ...this.classLevelService, getAll: this.classLevelService.getAll, deleteItem: this.classLevelService.delete };

  }

}
