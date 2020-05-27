import { Component } from '@angular/core';
import { ClassLevelService } from 'src/app/services/class-level.service';

@Component({
  selector: 'app-view-class-level',
  templateUrl: './view-class-level.component.html',
  styleUrls: ['./view-class-level.component.css']
})
export class ViewClassLevelComponent {
  classLevel: ClassLevelService = this.classLevelService;
  constructor(private classLevelService: ClassLevelService) { }

}
