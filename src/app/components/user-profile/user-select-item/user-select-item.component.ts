import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {selectEditModeOnState} from 'src/app/store/selectors/app.selectors';
import {select, Store} from '@ngrx/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from 'src/app/services/users.service';
import {takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-user-select-item',
  templateUrl: './user-select-item.component.html',
  styleUrls: ['./user-select-item.component.css']
})
export class UserSelectItemComponent extends subscribedContainerMixin() implements OnInit {

  @Input() label: string;
  @Input() value: number;
  @Input() userId: number;
  @Input() valueName: string;
  @Output() valueChanged: EventEmitter<{ id: number; name: string }> = new EventEmitter();
  @Input() items: Observable<any[]>;
  @ViewChild('selectInput') selectInput: ElementRef;
  editMode$: Observable<boolean> | undefined = this.store.pipe(select(selectEditModeOnState));
  editable = false;
  editHovered = false;
  itemForm: FormGroup = this.fb.group({
    fieldName: ['']
  });
  isSubmitting: boolean;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.itemForm.get('fieldName')?.setValue(this.value);
  }

  submitFormItem() {

    if (this.itemForm.valid) {
      this.isSubmitting = true;
      const fieldNewValue = this.itemForm.get('fieldName')?.value;
      this.usersService.update({
        fieldName: this.label,
        fieldNewValue,
        userId: this.userId
      })
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
          this.valueChanged.emit({
            id: (this.selectInput.nativeElement as HTMLSelectElement).selectedIndex,
            name: (this.selectInput.nativeElement as HTMLSelectElement).selectedOptions[0].innerText.trim()
          });
          this.isSubmitting = false;
          this.editable = false;
        }, () => this.isSubmitting = false);
    } else {
      alert('Form not filled correctly');
    }

  }

}
