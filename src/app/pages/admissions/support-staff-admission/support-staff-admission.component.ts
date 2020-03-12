import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { RolesAndPermissionsService } from '../../roles-and-permissions/services/roles-and-permissions.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadStaffTypes } from '../store/actions/staff-type.actions';

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
  ) { }

  ngOnInit() {
    this.staffTypes$ = this.rolesPermissionService.staffTypes
      .pipe(tap(res => this.staffTypes = res as any[]))
  }
  
  navigateToNewStaffPage() {
    // this.staffTypes.find(item => item.id === this.staffType
    this.store.dispatch(loadStaffTypes({ id: 1, name: 'bnm,.' }));
    
  }

}
