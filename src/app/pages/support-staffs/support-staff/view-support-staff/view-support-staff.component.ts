import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SupportStaffService } from '../../services/support-staff.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-support-staff',
  templateUrl: './view-support-staff.component.html',
  styleUrls: ['./view-support-staff.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSupportStaffComponent {
  supportStaffProfile$: Observable<any> = this.route.paramMap
    .pipe(
      map(params => Number(params.get('id'))),
      mergeMap(id => this.supportStaffService.loadStaffWithId$(id)),
    );

  constructor(
    private route: ActivatedRoute,
    private supportStaffService: SupportStaffService
  ) { }

  changeProfile($event: any) {
    console.log($event);
  }

}
