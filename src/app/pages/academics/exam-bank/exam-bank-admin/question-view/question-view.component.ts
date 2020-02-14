import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {

  @Input() activeQuestion: number;
  @Input() question: any;
  @Input() i: number;
  @Input() questionsLength: number;
  @Input() editMode: boolean;
  @Output() edit = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  editRequest(action: string, i) {
    this.edit.emit({ action, i })
  }
}
