import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';

@Component({
  selector: 'app-academic-year-financial-plan',
  templateUrl: './academic-year-financial-plan.component.html',
  styleUrls: ['./academic-year-financial-plan.component.css']
})
export class AcademicYearFinancialPlanComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
