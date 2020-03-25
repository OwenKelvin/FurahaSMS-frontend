import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile } from 'rxjs/operators';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadAcademicYearPlans } from '../store/actions/academic-year-plan.actions';

@Component({
  selector: 'app-academic-year-financial-plan',
  templateUrl: './academic-year-financial-plan.component.html',
  styleUrls: ['./academic-year-financial-plan.component.css']
})
export class AcademicYearFinancialPlanComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  constructor(
    private route: ActivatedRoute,
    private academicYear: AcademicYearService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap.pipe(map(params => Number(params.get('id'))))
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(mergeMap(id => this.academicYear.getAcademicYearWithId({ id })))
      .subscribe(academicYear => {
        this.store.dispatch(loadAcademicYearPlans(academicYear));
      });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
