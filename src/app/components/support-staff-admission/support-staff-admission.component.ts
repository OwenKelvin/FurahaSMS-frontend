import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-support-staff-admission',
  templateUrl: './support-staff-admission.component.html',
  styleUrls: ['./support-staff-admission.component.css']
})
export class SupportStaffAdmissionComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
