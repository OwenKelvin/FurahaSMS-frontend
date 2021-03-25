import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Store, select } from '@ngrx/store';
import { selectEditModeOnState } from 'src/app/store/selectors/app.selectors';
import { Observable } from 'rxjs';
import { formMixin } from 'src/app/shared/mixins/form.mixin';

@Component({
  selector: 'app-name-item',
  templateUrl: './name-item.component.html',
  styleUrls: ['./name-item.component.css']
})
export class NameItemComponent extends formMixin() implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() label = '';
  @Input() userId: number;
  @Output() valueChanged = new EventEmitter();
  itemForm: FormGroup;
  editHovered = false;
  editable = false;
  editMode$: Observable<boolean> = this.store.pipe(select(selectEditModeOnState));

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private store: Store
  ) { super(); }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: [this.name, Validators.minLength(2)]
    });
    if (['first', 'last', 'email'].includes(this.label.toLocaleLowerCase())) {
      this.itemForm.get('name')?.setValidators([Validators.required, Validators.minLength(2)]);
    }
    this.itemForm.updateValueAndValidity();

  }

  submitFormItem() {
    if (this.itemForm.valid) {
      this.submitInProgressSubject$.next(true);
      const fieldNewValue = this.itemForm.get('name')?.value;
      this.usersService.update({
        fieldName: this.label.replace(' ', ''),
        fieldNewValue,
        userId: this.userId
      })
        .subscribe({
          complete: () => this.submitInProgressSubject$.next(false),
          next: () => {
            this.valueChanged.emit(fieldNewValue);
            this.editable = false;
          }
        });
    } else {
      alert('Form not filled correctly');
    }

  }


}
