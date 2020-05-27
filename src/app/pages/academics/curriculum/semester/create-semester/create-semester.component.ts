import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../services/semester.service';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.css']
})
export class CreateSemesterComponent {

  constructor(public semesterService: SemesterService) { }

}
