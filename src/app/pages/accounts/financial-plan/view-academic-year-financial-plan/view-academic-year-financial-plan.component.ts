import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { selectAcademicYearPlanState } from '../store/selectors/academic-year-plan.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-academic-year-financial-plan',
  templateUrl: './view-academic-year-financial-plan.component.html',
  styleUrls: ['./view-academic-year-financial-plan.component.css']
})
export class ViewAcademicYearFinancialPlanComponent implements OnInit {
  academicYearPlan$: Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.academicYearPlan$ = this.store.pipe(select(selectAcademicYearPlanState));
  }

}
