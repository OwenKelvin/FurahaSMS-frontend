import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  @Input() newForm: boolean;
  @Input() title: boolean;
  @Input() fields: any[] = [];
  @Input() parent: string;
  @Input() viewLink: any;
  @Input() itemService: any;
  @Input() transforms: TransformInterface[];
  itemForm: FormGroup;
  isSubmitting: boolean;
  triggerValidation: boolean;
  constructor(private store: Store<AppState>, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.itemForm = this.fb.group({

    });

    if (this.fields.includes('name')) {
      this.itemForm.setControl('name', this.fb.control('', [Validators.required]));
    }
    if (this.fields.includes('abbr')) {
      this.itemForm.setControl('abbr', this.fb.control('', []));
    }
    if (this.parent) {
      this.itemForm.setControl('parentCategory', this.fb.control(null, [Validators.required]));
    }
    if (this.fields.includes('active')) {
      this.itemForm.setControl('active', this.fb.control(true, [Validators.required]));
    }
  }
  get submitData() {
    const toSubmit = this.itemForm.value;
    if (this.transforms) {
      this.transforms.forEach(item => {

        toSubmit[item.to] = toSubmit[item.from];

      });
    }
    return toSubmit;
  }
  submitForm() {

    this.isSubmitting = true;
    if (this.itemForm.valid) {
      this.itemService
        .submit(this.submitData)
        .subscribe(success => {
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastHeader: 'Success',
            toastBody: `Successfully created ${this.title}!`,
            toastTime: 'Just now'
          }));
          this.router.navigate([this.viewLink(success.id)]);

        }, error => {
          this.isSubmitting = false;
          this.store.dispatch(loadErrorMessagesSuccess({
            body: error.help,
            show: true,
            title: error.message,
            status: error.status
          }));
        });
    } else {
      this.itemForm.markAllAsTouched();
      this.triggerValidation = true;
    }
  }

}
