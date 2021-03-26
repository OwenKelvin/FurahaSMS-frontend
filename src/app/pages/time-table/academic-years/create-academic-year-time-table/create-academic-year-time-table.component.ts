import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {formMixin} from 'src/app/shared/mixins/form.mixin';
import {modalMixin} from 'src/app/shared/mixins/modal.mixin';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Store} from '@ngrx/store';
import {TimingTemplateService} from '../../services/timing-template.service';
import {TimeTableService} from '../../services/time-table.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-create-academic-year-time-table',
  templateUrl: './create-academic-year-time-table.component.html',
  styleUrls: ['./create-academic-year-time-table.component.css']
})
export class CreateAcademicYearTimeTableComponent extends formMixin(modalMixin()) {
  @Input() id: number;
  timingTypes$ = this.timeTableTimingService.all$;

  newTimeTableForm = this.fb.group({
    description: ['', Validators.required],
    timing: [null, Validators.required]
  });

  constructor(
    modal: BsModalService,
    store: Store,
    private fb: FormBuilder,
    private timeTableTimingService: TimingTemplateService,
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super(modal, store);
  }

  createTimetable() {
    this.submitInProgressSubject$.next(true);
    this.timeTableService.createForAcademicYear(this.id, this.newTimeTableForm.value)
      .subscribe({
        next: (res: any) => {
          this.submitInProgressSubject$.next(false);
          this.closeModal();
          this.router.navigate(['time-table', 'academic-years', this.id, 'timetables', res.data.id]).then();
        },
        error: () => this.submitInProgressSubject$.next(false)
      });

  }

}
