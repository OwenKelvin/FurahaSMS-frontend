import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-academic-year-financial-plan',
  templateUrl: './academic-year-financial-plan.component.html',
  styleUrls: ['./academic-year-financial-plan.component.css']
})
export class AcademicYearFinancialPlanComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .subscribe(id => {
        const confirmRedirect = confirm('You are being redirected to Accounts, do you wish to continue?');
        if (confirmRedirect) {
          this.router.navigate(['/accounts', 'financial-plan', 'academic-year', id, 'view']).then();
        } else {
          this.location.back();
        }
      });

  }

}
