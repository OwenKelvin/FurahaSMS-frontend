import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';

@Component({
  selector: 'app-exam-revision-mode',
  templateUrl: './exam-revision-mode.component.html',
  styleUrls: ['./exam-revision-mode.component.css']
})
export class ExamRevisionModeComponent implements OnInit {
  examPaper$: Observable<any>;
  questions: any[];
  activeQuestion = 0;
  showInstructions = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.examPaper$ = this.route.parent.paramMap
      .pipe(map(params => params.get('id')))
      .pipe(mergeMap(id => this.store.pipe(select(selectExamPaperItemState(id)))))
      .pipe(tap(res => {
        if (res) {
          this.questions = res.questions.map(item => ({
            id: item.id,
            correctAnswerDescription: item.correct_answer_description,
            multipleAnswers: item.multiple_answers,
            multipleChoices: item.multiple_choices,
            points: item.points,
            description: item.description,
            tags: item.tags_value,
            answers: item.answers_value.map(({ id, description, is_correct: isCorrect }) => ({
              id,
              description,
              isCorrect,
              selected: false,
            })),
            validated: false
          }));
        }
      }));
  }
  setActiveQuestion(i: number) {
    this.activeQuestion = i;
    (document.querySelector(`#question-section`) as HTMLDivElement).focus();
  }
  handleAnswerChange(event) {

  }
}
