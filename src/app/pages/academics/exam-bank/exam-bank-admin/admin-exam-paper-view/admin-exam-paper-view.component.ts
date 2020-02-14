import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile, mergeMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-exam-paper-view',
  templateUrl: './admin-exam-paper-view.component.html',
  styleUrls: ['./admin-exam-paper-view.component.css']
})
export class AdminExamPaperViewComponent implements OnInit {
  examPaper$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.examPaper$ = this.route.parent.paramMap
      .pipe(map(params => params.get('id')))
      .pipe(mergeMap(id => this.store.pipe(select(selectExamPaperItemState(id)))))
  }
}
