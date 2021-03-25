import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExamPaperService } from '../services/exam-paper.service';
import { Observable } from 'rxjs';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-exam-bank-admin',
  templateUrl: './exam-bank-admin.component.html',
  styleUrls: ['./exam-bank-admin.component.css']
})
export class ExamBankAdminComponent implements OnInit, OnDestroy {
  examPapers$: Observable<any>;
  deleting: boolean[];
  componentIsActive: boolean;

  constructor(
    private examPaperService: ExamPaperService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.deleting = [false];
    this.examPapers$ = this.examPaperService.getByFilter({ self: true });
  }
  deleteItem(data: { index: number; id: number; name: string }) {
    const { index, id, name } = data;
    const deletionConfirmed = confirm(`Are you sure you wish to delete exam paper "${name}" ?`);
    if (deletionConfirmed) {
      this.deleting[index] = true;
      this.examPaperService.deleteItem(id)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(() => {
          this.deleting[index] = false;
        }, () => {
          this.deleting[index] = false;
        });
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
