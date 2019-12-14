import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  @Input() labelOnly: boolean;
  @Input() successLabel: string;
  @Input() failureLabel: string;
  @Output() close: EventEmitter<any>;
  @Input() value: boolean;
  constructor() { }

  ngOnInit() {
  }
  get labelValue() {
    // TODO-me change label for success and failure
    if (this.value) {
      return 'Active'
    }
    return 'Inactive';
  }
  removeItem() {
    this.close.emit(true);
  }

}
