import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {selectPlanForAcademicYearWithId} from '../store/selectors/academic-year-plan.selectors';
import {Observable} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-academic-year-financial-plan',
  templateUrl: './view-academic-year-financial-plan.component.html',
  styleUrls: ['./view-academic-year-financial-plan.component.css']
})
export class ViewAcademicYearFinancialPlanComponent {
  academicYearPlanId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
  )
  academicYearPlan$: Observable<any> = this.academicYearPlanId$.pipe(
    mergeMap(id => this.store.pipe(select(selectPlanForAcademicYearWithId(id))))
  );
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
  }

}
