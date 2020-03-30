import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap, takeWhile } from 'rxjs/operators';
import { loadExamPapers } from '../../store/actions/exam-paper.actions';

@Component({
  selector: 'app-admin-exam-paper',
  templateUrl: './admin-exam-paper.component.html',
  styleUrls: ['./admin-exam-paper.component.css']
})
export class AdminExamPaperComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

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
