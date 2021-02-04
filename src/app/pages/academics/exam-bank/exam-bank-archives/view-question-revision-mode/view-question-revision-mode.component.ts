import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-view-question-revision-mode',
  templateUrl: './view-question-revision-mode.component.html',
  styleUrls: ['./view-question-revision-mode.component.css']
})
export class ViewQuestionRevisionModeComponent implements OnInit, OnChanges {

  @Input() activeQuestion: number;
  @Input() question: any;
  @Input() i: number;
  @Input() questionsLength: number;
  @Output() activeQuestionChange = new EventEmitter();
  @Output() answerChange = new EventEmitter();
  answers: any;

  constructor() { }

  ngOnInit() {
    this.answers = this.question.answers;
  }
  activeQuestionPrevious() {
    this.activeQuestionChange.emit(-1);
  }
  activeQuestionNext() {
    this.activeQuestionChange.emit(1);
  }
  emitChangedAnswer(k: number) {
    if (!this.question.multipleAnswers) {
      this.question.answers = this.question.answers.map((element: any) => ({
        ...element,
        selected: false
      }));
      this.question.answers[k].selected = true;
      this.answers = this.question.answers;
    }
    this.answerChange.emit(this.answers);
  }
  ngOnChanges(changes: SimpleChanges) {
    const question: SimpleChange = changes.question;
    if (question && question.currentValue) {
      this.answers = this.question.answers;
    }
  }
  answerSelected(answers: any[]) {
    return answers.every(({ selected }) => !selected );
  }
}
