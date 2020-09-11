import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {TeacherSubjectService} from '../services/teacher-subject.service';

@Component({
  selector: 'app-view-teacher-subjects',
  templateUrl: './view-teacher-subjects.component.html',
  styleUrls: ['./view-teacher-subjects.component.css']
})
export class ViewTeacherSubjectsComponent {

  teacherId$ = this.route.parent?.paramMap.pipe(
    map(params => Number(params.get('id')))
  )

  subjects$ = this.teacherId$?.pipe(
    mergeMap(id => this.teacherSubjectService.getSubjects(id))
  )

  constructor(
    private route: ActivatedRoute,
    private teacherSubjectService: TeacherSubjectService) {
  }


}
