import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
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

    this.categories = this.unitsService;
  }

}
