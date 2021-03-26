import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {modalMixin} from 'src/app/shared/mixins/modal.mixin';
import {formMixin} from 'src/app/shared/mixins/form.mixin';
import {Store} from '@ngrx/store';
import {BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder, Validators, FormGroup, FormArray} from '@angular/forms';
import {TimingTemplateService} from '../../services/timing-template.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-create-timing-template',
  templateUrl: './create-timing-template.component.html',
  styleUrls: ['./create-timing-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTimingTemplateComponent extends formMixin(modalMixin()) implements OnInit {

  timeTableTimingForm = this.fb.group({
    description: ['', Validators.required],
    timings: this.fb.array([])
  });
  constructor(
    modal: BsModalService,
    store: Store,
    private fb: FormBuilder, private timingTemplateService: TimingTemplateService) {
    super(modal, store);
  }

  getInitialStateTiming(): FormGroup {
    return this.fb.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    [0, 1, 2].forEach(() => this.addTiming());
  }

  addTiming() {
    (this.timeTableTimingForm.get('timings') as FormArray).push(this.getInitialStateTiming());
  }

  deleteTiming(i: number) {
    this.timings.controls.splice(i, 1);
    this.timings.updateValueAndValidity();
  }

  get timings(): FormArray {
    return this.timeTableTimingForm.get('timings') as FormArray;
  }

  saveTimings() {
    if (this.timeTableTimingForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.timingTemplateService.store(this.timeTableTimingForm.value).pipe(
        tap(() => this.submitInProgressSubject$.next(false))
      ).subscribe({
        next: () => this.closeModal(),
        error: () => this.submitInProgressSubject$.next(false)
      });
    }
  }

}
