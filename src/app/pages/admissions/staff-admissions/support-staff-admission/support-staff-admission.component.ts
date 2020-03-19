import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { RolesAndPermissionsService } from '../../../roles-and-permissions/services/roles-and-permissions.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadStaffTypesSuccess } from '../../store/actions/staff-type.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-staff-admission',
  templateUrl: './support-staff-admission.component.html',
  styleUrls: ['./support-staff-admission.component.css']
})
export class SupportStaffAdmissionComponent implements OnInit {
  staffTypes$: Observable<any>;
  staffTypes: any;
  staffType: any;

  constructor(
    private store: Store<fromStore.AppState>,
    private rolesPermissionService: RolesAndPermissionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.staffTypes$ = this.rolesPermissionService.staffTypes()
      .pipe(tap(res => {
        this.staffTypes = res as any[]
      }))
  }

  navigateToNewStaffPage() {
    this.store.dispatch(loadStaffTypesSuccess(this.staffTypes.find(item => +item.id === +this.staffType)))
    this.router.navigate(['admissions','staff','support',this.staffType,'create']);
  }

}
