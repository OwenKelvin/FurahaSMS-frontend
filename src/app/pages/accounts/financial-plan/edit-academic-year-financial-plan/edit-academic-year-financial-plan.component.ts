import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectAcademicYearPlanState } from '../store/selectors/academic-year-plan.selectors';
import { ClassLevelService } from 'src/app/services/class-level.service';

@Component({
  selector: 'app-edit-academic-year-financial-plan',
  templateUrl: './edit-academic-year-financial-plan.component.html',
  styleUrls: ['./edit-academic-year-financial-plan.component.css']
})
export class EditAcademicYearFinancialPlanComponent implements OnInit {

  academicYearPlan$: Observable<any>;
  classLevels$: Observable<any>;
  constructor(private store: Store<AppState>, private classLevelService: ClassLevelService ) { }

  ngOnInit() {
    this.academicYearPlan$ = this.store.pipe(select(selectAcademicYearPlanState));
    this.classLevels$ = this.classLevelService.getAll({ includeUnits: 1, includeLevels: 1 });
  }

}
