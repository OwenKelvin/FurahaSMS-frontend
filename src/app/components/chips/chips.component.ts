import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  @Input() labelOnly: boolean;
  @Input() successLabel: string;
  @Input() failureLabel: string;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() value: boolean;

  get labelValue() {
    // TODO-me change label for success and failure
    return (this.value) ? 'Active' : 'Inactive';
  }




































  removeItem() {
    this.remove.emit(true);
  }

}
