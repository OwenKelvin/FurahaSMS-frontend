import { Component } from '@angular/core';
import { ClassLevelService } from 'src/app/services/class-level.service';

@Component({
  selector: 'app-academics-curriculum-class-levels',
  templateUrl: './academics-curriculum-class-levels.component.html',
  styleUrls: ['./academics-curriculum-class-levels.component.css']
})
export class AcademicsCurriculumClassLevelsComponent {

  itemService = this.classLevelService;
  constructor( private classLevelService: ClassLevelService) { }

}
