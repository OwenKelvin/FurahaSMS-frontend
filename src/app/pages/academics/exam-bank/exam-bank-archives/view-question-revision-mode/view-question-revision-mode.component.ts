import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-question-revision-mode',
  templateUrl: './view-question-revision-mode.component.html',
  styleUrls: ['./view-question-revision-mode.component.css']
})
export class ViewQuestionRevisionModeComponent implements OnInit {

  @Input() activeQuestion: number;
  @Input() question: any;
  @Input() i: number;
  @Input() questionsLength: number;
  @Output() activeQuestionChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  activeQuestionPrevious() {
    this.activeQuestionChange.emit(-1);
  }
  activeQuestionNext() {
    this.activeQuestionChange.emit(1);
  }

}
