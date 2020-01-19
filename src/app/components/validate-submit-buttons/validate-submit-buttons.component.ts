import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-validate-submit-buttons',
  templateUrl: './validate-submit-buttons.component.html',
  styleUrls: ['./validate-submit-buttons.component.css'],
})
export class ValidateSubmitButtonsComponent implements OnInit {

  @Input() formItem: FormGroup;
  @Input() isSubmitting: boolean;
  @Output() validationButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  triggerValidation() {
    this.validationButtonClicked.emit();
  }

}
