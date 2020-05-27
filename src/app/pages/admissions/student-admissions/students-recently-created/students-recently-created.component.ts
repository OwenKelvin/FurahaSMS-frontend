import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-recently-created',
  templateUrl: './students-recently-created.component.html',
  styleUrls: ['./students-recently-created.component.css']
})
export class StudentsRecentlyCreatedComponent implements OnInit {
  @Input() linksTo: string[];
  students$: Observable<any[]>;

  constructor(
    private studentsService: StudentService) { }

  ngOnInit() {
    this.students$ = this.studentsService.getRecentlyCreatedStudents();
  }
  getRouterLinks(id: number) {
    if (this.linksTo) {
      return this.linksTo.map(link => link.replace(':id', String(id)));
    }
    return ['/students', id];
  }
}
