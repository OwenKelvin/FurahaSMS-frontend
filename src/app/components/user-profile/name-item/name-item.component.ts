import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
    })
  }
  
  submitFormItem() {
    this.isSubmitting = true;
    this.usersService.update({
      fieldName: 'firstName',
      fieldNewValue: this.itemForm.get('name')?.value,
      userId: 1
    })
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
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
