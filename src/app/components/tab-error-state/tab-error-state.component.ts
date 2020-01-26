import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab-error-state',
  templateUrl: './tab-error-state.component.html',
  styleUrls: ['./tab-error-state.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabErrorStateComponent implements OnInit {
  @Input() hasError: boolean;
  @Input() marked: boolean;
  constructor() { }

  ngOnInit() {
  }

}
