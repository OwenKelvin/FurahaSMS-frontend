import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-admin-exam-paper-view',
  templateUrl: './admin-exam-paper-view.component.html',
  styleUrls: ['./admin-exam-paper-view.component.css']
})
export class AdminExamPaperViewComponent implements OnInit {
  examPaper$: Observable<any>;
  questions: any[];
  activeQuestion = 0;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.examPaper$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => params.get('id')))
      .pipe(mergeMap(id => this.store.pipe(select(selectExamPaperItemState(id)))))
      .pipe(tap(res => {
        if (res) {
          this.questions = res.questions.map((item: any) => ({
            id: item.id,
            correctAnswerDescription: item.correct_answer_description,
            multipleAnswers: item.multiple_answers,
            multipleChoices: item.multiple_choices,
            points: item.points,
            description: item.description,
            tags: item.tags_value,
            answers: item.answers_value.map(({ id, description, is_correct: isCorrect }: any) => ({ id, description, isCorrect }))
          }));
        }
      }));
  }
}
