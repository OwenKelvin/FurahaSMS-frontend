import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Input() idIndex: number;
  showErrorMessage: boolean;
  itemForm: FormGroup = this.fb.group({ });
;
  isSubmitting: boolean;
  triggerValidation: boolean;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    ['name', 'abbr', 'active'].forEach(item => {
      if (this.fields.includes(item)) {
        this.itemForm.setControl(item, this.fb.control('', []));
      }
    })
    if (this.parent) {
      this.itemForm.setControl('parentCategory', this.fb.control(null, [Validators.required]));
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

    if (this.itemForm.valid) {
      this.isSubmitting = true;
      this.itemService
        .submit(this.submitData)
        .subscribe((success: any) => {
          this.router.navigate([this.viewLink(success.id)]);
        }, () => {
          this.isSubmitting = false;

        });
    } else {
      this.itemForm.markAllAsTouched();
      this.triggerValidation = true;
    }
  }
}
