import { Component, OnInit } from '@angular/core';
import { ExamPaperService } from '../services/exam-paper.service';
import { Observable } from 'rxjs';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-exam-bank-admin',
  templateUrl: './exam-bank-admin.component.html',
  styleUrls: ['./exam-bank-admin.component.css']
})
export class ExamBankAdminComponent implements OnInit {
  examPapers$: Observable<any>;
  deleting: boolean[];

  constructor(
    private examPaperService: ExamPaperService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.deleting = [false];
    this.examPapers$ = this.examPaperService.getByFilter({ self: true });
  }
  deleteItem(data: { index: number, id: number, name: string }) {
    const { index, id, name } = data;
    const deletionConfirmed = confirm(`Are you sure you wish to delete exam paper "${name}" ?`);
    if (deletionConfirmed) {
      this.deleting[index] = true;
      this.examPaperService.deleteItem(id)
        .subscribe(res => {
          this.deleting[index] = false;
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastHeader: 'Success',
            toastBody: res.message,
            toastTime: 'Just now'
          }));
        }, err => {
          this.deleting[index] = false;
        });
    }
  }
}
