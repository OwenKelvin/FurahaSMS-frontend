import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-name-item',
  templateUrl: './name-item.component.html',
  styleUrls: ['./name-item.component.css']
})
export class NameItemComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Input() label: string = '';
  @Input() editMode: boolean = false;
  @Input() userId: number;
  @Output() valueChanged = new EventEmitter();
  itemForm: FormGroup;
  editHovered: boolean = false;
  editable: boolean = false;
  isSubmitting: boolean = false;
  componentIsActive: boolean;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.componentIsActive = true;
    this.itemForm = this.fb.group({
      name: [this.name, Validators.minLength(2)]
    });
    if (['first', 'last'].includes(this.label.toLocaleLowerCase())) {
      this.itemForm.get('name')?.setValidators([Validators.required, Validators.minLength(2)]);
    }
    this.itemForm.updateValueAndValidity()
  }

  submitFormItem() {
    if (this.itemForm.valid) {
      this.isSubmitting = true;
      const fieldNewValue = this.itemForm.get('name')?.value;
      this.usersService.update({
        fieldName: this.label + 'Name',
        fieldNewValue,
        userId: this.userId
      })
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(res => {
          this.valueChanged.emit(fieldNewValue);
          this.isSubmitting = false;
          this.editable = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success!',
            toastTime: 'Just now'
          }));
        }, () => this.isSubmitting = false);
    } else {
      alert('Form not filled correctly')
    }

  }
  ngOnDestroy() {
    this.componentIsActive = false;

  }

}
