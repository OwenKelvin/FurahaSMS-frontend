import {Component, EventEmitter, Input, Output} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {formMixin} from '../../../../../../shared/mixins/form.mixin';
import {takeUntil, tap} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../../../shared/mixins/subscribed-container.mixin';
import {OnlineAssessmentService} from '../../../services/online-assessment.service';

@Component({
  selector: 'app-manage-online-assessment',
  templateUrl: './manage-online-assessment.component.html',
  styleUrls: ['./manage-online-assessment.component.css']
})
export class ManageOnlineAssessmentComponent extends subscribedContainerMixin(formMixin()) {
  @Input() topicId: number;
  @Input() assessmentId: number;
  _submitted = new Subject();
  itemForm = this.fb.group({
    name: ['', Validators.required],
    availableDateTime: ['', [Validators.required]],
    closedDateTime: ['', [Validators.required]],
    period: ['', [Validators.required]],
  })

  formChanged$ = this.itemForm.valueChanges.pipe(
    tap(() => this.valid.emit(this.itemForm))
  )

  v$ = combineLatest([this.formChanged$])
  @Input() submitted: Observable<any>

  set(val: Observable<any>) {
    this._submitted.next()
    return val
  }

  @Output() valid = new EventEmitter();
  @Output() submitChange = new EventEmitter();

  submission = () => this.onlineAssessmentService.save({
    topicId: this.topicId,
    data: this.itemForm.value,
    assessmentId: this.assessmentId
  })

  constructor(private fb: FormBuilder, private onlineAssessmentService: OnlineAssessmentService) {
    super();
  }

  submitFormItem() {
    this.submitChange.emit(true)
    this.submission().pipe(takeUntil(this.destroyed$)).subscribe({
      error: () => this.submitChange.emit(false)
    })
  }
}
