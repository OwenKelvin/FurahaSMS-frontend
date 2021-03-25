import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UnitCategoryInterface } from 'src/app/interfaces/unit-category.interface';
import { UnitsService } from 'src/app/services/units.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { VIEW_UNIT_CURRICULUM } from 'src/app/helpers/links.helpers';
import { AppState } from 'src/app/store/reducers';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';
import {takeUntil, takeWhile} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';

export default interface IUnitForm {
  id?: number;
  name: string;
  active?: boolean | 1 | 0 | undefined | null;
  abbr: string;
  description?: string;
  unitCategory: number;
}
@Component({
  selector: 'app-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.css']
})
export class CreateUnitComponent extends subscribedContainerMixin() implements OnInit {
  @Input() category: number;
  @Input() idIndex: number;
  @Input() submitButton = true;
  @Input() inputValue: any;
  @Input() hasCategories = true;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Input() hideSubmit: boolean;
  unitCategories: UnitCategoryInterface[];
  unitCategorySelected: any;
  formId: any;
  triggerValidation: boolean;
  isSubmitting: boolean;
  unitForm = this.fb.group({
    id: [null, []],
    name: ['', [Validators.required]],
    abbr: ['', [Validators.required]],
    description: [''],
    active: [true],
    unitCategory: [null, Validators.required]
  });
  newForm = true;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private unitService: UnitsService
  ) { super(); }

  ngOnInit() {
    this.unitForm.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
      this.valueChange.emit(this.unitForm);
    });
  }

  submit() {
    if (this.unitForm.valid) {
      this.isSubmitting = true;
      this.unitService.submit(this.unitForm.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(success => {
        this.router.navigate([VIEW_UNIT_CURRICULUM(success.id)]).then();
        this.isSubmitting = false;
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: 'Successfully created unit',
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));
      }, error => {

        this.store.dispatch(loadErrorMessagesSuccess({
          body: error.help,
          show: true,
          title: error.message,
          status: error.status
        }));
        this.isSubmitting = false;
      });
    } else {
      this.unitForm.markAllAsTouched();
      this.triggerValidation = true;
    }
  }
}
