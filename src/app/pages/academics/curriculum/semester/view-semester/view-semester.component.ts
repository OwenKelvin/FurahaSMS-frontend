import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../services/semester.service';

@Component({
  selector: 'app-view-semester',
  templateUrl: './view-semester.component.html',
  styleUrls: ['./view-semester.component.css']
})
export class ViewSemesterComponent implements OnInit {

  constructor(public semesterService: SemesterService) { }

  ngOnInit() {
  }

}
