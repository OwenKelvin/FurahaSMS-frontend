import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { RolesAndPermissionsService } from '../../../roles-and-permissions/services/roles-and-permissions.service';
import { Observable } from 'rxjs';
import { tap, takeWhile } from 'rxjs/operators';
import { loadStaffTypesSuccess } from '../../store/actions/staff-type.actions';
import { Router } from '@angular/router';
import { selectStaffTypes } from '../../store/selectors/staff-type.selectors';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-support-staff-admission',
  templateUrl: './support-staff-admission.component.html',
  styleUrls: ['./support-staff-admission.component.css']
})
export class SupportStaffAdmissionComponent implements OnInit {
  staffTypes$: Observable<any>;
  staffType: any;
  staffTypeFrom: FormGroup;
  componentIsActive: boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private rolesPermissionService: RolesAndPermissionsService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.rolesPermissionService.loadAllStaffTypes$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe();
    this.staffTypes$ = this.store.pipe(
      select(selectStaffTypes)
    )
    this.staffTypeFrom = this.fb.group({
      staffTypeId: ['', [Validators.required]]
    })
  }

  staffTypeFormSubmit() {
    if (this.staffTypeFrom.valid) {
       this.router.navigate(['admissions', 'staff', 'support', this.staffTypeFrom.get('staffTypeId')?.value,'create']);
    }
   
  }
}
