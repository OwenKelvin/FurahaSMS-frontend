import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {formMixin} from '../../../../../../shared/mixins/form.mixin';
import {takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-manage-online-assessment',
  templateUrl: './manage-online-assessment.component.html',
  styleUrls: ['./manage-online-assessment.component.css']
})
export class ManageOnlineAssessmentComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  _submitted = new Subject();
  itemForm = this.fb.group({
    title: ['', Validators.required],
    availableDateTime: ['', [Validators.required]],
    closedDateTime: ['', [Validators.required]],
    period: ['', [Validators.required]],
  })
  @Input() submitted: Observable<any>
  @Output() valid = new EventEmitter();

  set(val: Observable<any>) {
    this._submitted.next()
    return val
  }

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.itemForm.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe({ next: () => this.valid.emit(this.itemForm)})
  }

  submitFormItem() {
    alert('That worked!!!!')
  }
}
