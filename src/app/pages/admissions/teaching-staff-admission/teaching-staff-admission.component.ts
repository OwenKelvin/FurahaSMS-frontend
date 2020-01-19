import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-teaching-staff-admission',
  templateUrl: './teaching-staff-admission.component.html',
  styleUrls: ['./teaching-staff-admission.component.css']
})
export class TeachingStaffAdmissionComponent implements OnInit {

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
