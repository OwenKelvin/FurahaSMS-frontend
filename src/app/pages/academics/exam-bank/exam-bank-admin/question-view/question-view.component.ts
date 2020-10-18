import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output() edit = new EventEmitter();
  @Output() activeQuestionChange = new EventEmitter();
  @Output() deleteQuestion = new EventEmitter();
  @Output() reorderQuestions = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  editRequest(action: string, i: number) {
    this.edit.emit({action, i});
  }

  activeQuestionPrevious() {
    this.activeQuestionChange.emit(-1);
  }

  activeQuestionNext() {
    this.activeQuestionChange.emit(1);
  }

  deleteQuestionRequest(i: number) {
    this.deleteQuestion.emit(i);
  }

  reorderQuestionsRequest(value: any) {
    this.reorderQuestions.emit(value);
  }
}
