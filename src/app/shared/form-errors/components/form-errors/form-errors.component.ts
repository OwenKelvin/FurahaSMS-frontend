import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup, ValidationErrors} from '@angular/forms';

interface AllValidationErrors {
  controlName: string;
  errorName: string;
  errorValue: any;
}

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() validated: boolean;
  @Input() messages: { [id: string ]: string };
  errors: AllValidationErrors[];
  constructor(
  ) {
    this.errors = [];
    this.messages = { };
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.errors = [];
      this.calculateErrors(this.form);
    });

    this.calculateErrors(this.form);
  }
  calculateErrors(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.errors = this.errors.concat(this.calculateErrors(control));
        return;
      }

      const controlErrors: ValidationErrors = control?.errors as ValidationErrors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.errors.push({
            controlName: field,
            errorName: keyError,
            errorValue: controlErrors[keyError]
          });
        });
      }
    });

    // This removes duplicates
    this.errors = this.errors.filter((error, index, self) =>
      self.findIndex(t => t.controlName === error.controlName && t.errorName === error.errorName) === index);
    return this.errors;
  }

  getErrorMessage(error: any) {
    let label = this.messages[error.controlName];
    if(!label){
      label = error.controlName.replace( /([A-Z])/g, ' $1' );
      label = label.charAt(0).toUpperCase() + label.slice(1);
    }
    switch (error.errorName) {
      case 'required':
        return 'Kindly fill the ' + label + ' field';
      default:
        return 'unknown error ' + error.errorName;
    }
  }

}
