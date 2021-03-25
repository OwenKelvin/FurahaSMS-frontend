import {Component} from '@angular/core';
import {TeacherService} from '../../admissions/services/teacher.service';

@Component({
  selector: 'app-teachers-dashboard',
  templateUrl: './teachers-dashboard.component.html',
  styleUrls: ['./teachers-dashboard.component.css']
})
export class TeachersDashboardComponent {

  teachers$ = this.teachersService.getActiveTeachers();

  constructor(private teachersService: TeacherService) {
  }
}
