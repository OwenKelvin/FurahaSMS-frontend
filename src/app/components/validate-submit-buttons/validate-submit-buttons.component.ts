import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-validate-submit-buttons',
  templateUrl: './validate-submit-buttons.component.html',
  styleUrls: ['./validate-submit-buttons.component.css'],
})
export class ValidateSubmitButtonsComponent {

  @Input() formItem: FormGroup;
  @Input() isSubmitting: boolean;
  @Output() validationButtonClicked = new EventEmitter();
  validatedSubject$= new BehaviorSubject<boolean>(false);
  validatedAction$ = this.validatedSubject$.asObservable();
  constructor() { }

  triggerValidation() {
    this.validatedSubject$.next(true);
    this.validationButtonClicked.emit();
  }

}
