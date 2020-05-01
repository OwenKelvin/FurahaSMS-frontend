import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent {

  componentIsActive = true;
  staffType$: Observable<number> = this.route.paramMap
    .pipe(
      map(params => Number(params.get('id')))
    );

  constructor(
    private route: ActivatedRoute,
  ) { }

}
