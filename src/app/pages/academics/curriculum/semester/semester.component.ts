import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { CREATE_SEMESTER, EDIT_SEMESTER, VIEW_SEMESTER } from './helpers/links.helpers';
import { SemesterService } from './services/semester.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  createSemester: string;
  editSemester: (id: string | number) => string;
  viewSemester: (id: string | number) => string;
  categories: any;

  constructor(
    private store: Store<AppState>,
    private semesterService: SemesterService
  ) { }
  ngOnInit() {
    this.createSemester = CREATE_SEMESTER;
    this.editSemester = EDIT_SEMESTER;
    this.viewSemester = VIEW_SEMESTER;
    this.categories = this.semesterService;
  }

}
