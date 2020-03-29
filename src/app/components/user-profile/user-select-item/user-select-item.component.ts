import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { selectEditModeOnState } from 'src/app/store/selectors/app.selectors';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-select-item',
  templateUrl: './user-select-item.component.html',
  styleUrls: ['./user-select-item.component.css']
})
export class UserSelectItemComponent implements OnInit, OnDestroy {

  @Input() label: string;
  @Input() value: number;
  @Input() userId: number;
  @Input() valueName: string;
  @Output() valueChanged: EventEmitter<{id: number, name: string}> = new EventEmitter();
  editMode$: Observable<boolean> | undefined;
  @Input() items: Observable<any[]>;
  editable: boolean = false;
  editHovered: boolean = false;
  itemForm: FormGroup;
  isSubmitting: boolean;
  componentIsActive: boolean;
  @ViewChild('selectInput') selectInput: ElementRef;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.componentIsActive = true;
    this.itemForm = this.fb.group({
      fieldName: [this.value]
    })
    this.editMode$ = this.store.pipe(select(selectEditModeOnState));
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
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(res => {
          this.valueChanged.emit({
            id: (this.selectInput.nativeElement as HTMLSelectElement).selectedIndex,
            name: (this.selectInput.nativeElement as HTMLSelectElement).selectedOptions[0].innerText.trim()
          });
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
      alert('Form not filled correctly');
    }

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
