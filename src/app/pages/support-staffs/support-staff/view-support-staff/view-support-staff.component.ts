import { Component, OnInit } from '@angular/core';
import { takeWhile, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SupportStaffService } from 'src/app/pages/admissions/services/support-staff.service';

@Component({
  selector: 'app-view-support-staff',
  templateUrl: './view-support-staff.component.html',
  styleUrls: ['./view-support-staff.component.css']
})
export class ViewSupportStaffComponent implements OnInit {
  componentIsActive: boolean;

  constructor(
    private route: ActivatedRoute,
    private supportStaffService: SupportStaffService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.supportStaffService.getSupportStaffById(id)))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe();
  }

}
