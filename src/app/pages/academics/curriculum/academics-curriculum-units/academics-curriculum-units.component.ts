import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { CREATE_UNIT_CURRICULUM, EDIT_UNIT_CURRICULUM, VIEW_UNIT_CURRICULUM } from 'src/app/helpers/links.helpers';
import { Observable } from 'rxjs';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-academics-curriculum-units',
  templateUrl: './academics-curriculum-units.component.html',
  styleUrls: ['./academics-curriculum-units.component.css']
})
export class AcademicsCurriculumUnitsComponent implements OnInit {

  units$: Observable<any[]>;
  categories: any;
  viewUnitCategoryCurriculum: (id: string | number) => string;
  createUnitCurriculum: string;
  editUnitCurriculum: (id: string | number) => string;
  viewUnitCurriculum: (id: string | number) => string;
  constructor(
    private store: Store<AppState>,
    private unitsService: UnitsService
  ) { }

  ngOnInit() {
    this.createUnitCurriculum = CREATE_UNIT_CURRICULUM;
    this.editUnitCurriculum = EDIT_UNIT_CURRICULUM;
    this.viewUnitCurriculum = VIEW_UNIT_CURRICULUM;
    this.categories = this.unitsService;
  }

}
