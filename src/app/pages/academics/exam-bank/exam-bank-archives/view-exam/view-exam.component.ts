import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, tap, takeWhile } from 'rxjs/operators';
import { loadExamPapers } from '../../store/actions/exam-paper.actions';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css']
})
export class ViewExamComponent implements OnInit, OnDestroy {

  componentIsActive: boolean;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap((id) => this.store.dispatch(loadExamPapers({ id }))))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe();
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
