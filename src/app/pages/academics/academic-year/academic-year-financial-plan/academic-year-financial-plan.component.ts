import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { takeWhile, map } from 'rxjs/operators';

@Component({
  selector: 'app-academic-year-financial-plan',
  templateUrl: './academic-year-financial-plan.component.html',
  styleUrls: ['./academic-year-financial-plan.component.css']
})
export class AcademicYearFinancialPlanComponent implements OnInit , OnDestroy{
  componentIsActive: boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(id => {
        const confirmRedirect = confirm('You are being redirected to Accounts, do you wish to continue?');
        if (confirmRedirect) {
          this.router.navigate(['/accounts', 'financial-plan', 'academic-year', id, 'view']);
        } else {
          this.location.back();
        }
      });

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
