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
  @Output() change = new EventEmitter();
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
      name: [this.name, [Validators.required, Validators.minLength(2)]]
    });
  }

  submitFormItem() {
    this.isSubmitting = true;
    this.usersService.update({
      fieldName: this.label + 'Name',
      fieldNewValue: this.itemForm.get('name')?.value,
      userId: this.userId
    })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
        this.change.emit(this.itemForm.get('name')?.value)
        this.isSubmitting = false;
        this.editable = false;
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: res.message,
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));
      }, () => this.isSubmitting = false);
  }
  ngOnDestroy() {
    this.componentIsActive = false;

  }

}
