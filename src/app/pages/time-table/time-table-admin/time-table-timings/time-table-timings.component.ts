import { Component } from '@angular/core';
import { modalMixin } from 'src/app/shared/mixins/modal.mixin';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { CreateTimingTemplateComponent } from '../create-timing-template/create-timing-template.component';

@Component({
  selector: 'app-time-table-timings',
  templateUrl: './time-table-timings.component.html',
  styleUrls: ['./time-table-timings.component.css']
})
export class TimeTableTimingsComponent extends modalMixin() {

  constructor(modalService: BsModalService, store: Store) {
    super(modalService, store);
  }

  newTimeTablePlan() {
    this.openModal({ id: 0, component: CreateTimingTemplateComponent });
  }

}
