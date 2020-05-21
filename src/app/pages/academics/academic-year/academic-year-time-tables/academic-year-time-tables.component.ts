import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-academic-year-time-tables',
  templateUrl: './academic-year-time-tables.component.html',
  styleUrls: ['./academic-year-time-tables.component.css']
})
export class AcademicYearTimeTablesComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent?.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .subscribe(id => {
        const confirmRedirect = confirm('You are being redirected to Time Table, do you wish to continue?');
        if (confirmRedirect) {
          this.router.navigate(['/time-table', 'academic-years', id, 'view']);
        } else {
          this.location.back();
        }
      });
  }

}
