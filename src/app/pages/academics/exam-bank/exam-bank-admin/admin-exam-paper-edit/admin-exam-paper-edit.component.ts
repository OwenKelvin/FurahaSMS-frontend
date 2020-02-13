import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-exam-paper-edit',
  templateUrl: './admin-exam-paper-edit.component.html',
  styleUrls: ['./admin-exam-paper-edit.component.css']
})
export class AdminExamPaperEditComponent implements OnInit {
  examPaper$: Observable<any>;
  activeQuestion: number;
  Queries: { description: string; }[];
  modalRef: BsModalRef;
  dialog: any;

  constructor(private store: Store<AppState>, private modalService: BsModalService) { }

  ngOnInit() {
    this.dialog = {
      title: 'Add Item',
      type: 'new',
      value: {
      }
    };
    this.examPaper$ = this.store.pipe(select(selectExamPaperItemState(1)));
    this.activeQuestion = 0;

    this.Queries = Array(10).fill(1).map((i, j) => ({
      description: `${j}==>>${Math.random().toString(36)} ${Math.random().toString(36)}
      ${Math.random().toString(36)} ${Math.random().toString(36)} ${Math.random().toString(36)}
      `
    }));
  }
  openModal(template: TemplateRef<any>, action: string, i) {
    switch (action) {
      case 'add-before':
        this.dialog.title = `New Question before Qn ${i + 1 }`;
        this.dialog.value = {};
        this.dialog.type = 'new';
        this.dialog.index = i;
        break;
      case 'add-after':
        this.dialog.title = `New Question after Qn ${i + 1}`;
        this.dialog.value = {};
        this.dialog.type = 'new';
        this.dialog.index = i + 1;
        break;
      case 'edit':
        this.dialog.title = `Edit Question ${i + 1}`;
        this.dialog.value = Object.create(this.Queries[i]);
        this.dialog.type = 'edit';
        this.dialog.index = i;
        break;
    }
    const config = {
      backdrop: false,
      ignoreBackdropClick: true
    };
    this.modalRef = this.modalService.show(template, config);

    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  }
  get questions() {
    return this.Queries;
  }
  reorderQuestions(data: { move: 'up' | 'down', index: number; }) {
    const { index, move } = data;
    const tmp = this.Queries[index];
    const swapIndex = move === 'up' ? (index - 1) : (index + 1);
    this.Queries[index] = this.Queries[swapIndex];
    this.Queries[swapIndex] = tmp;
    this.activeQuestion = swapIndex;
  }
  saveQuestion() {
    if (this.dialog.type === 'edit') {
      this.Queries[this.dialog.index] = Object.create(this.dialog.value);
    } else {
      this.Queries.splice(this.dialog.index, 0, this.dialog.value);
      this.activeQuestion = this.dialog.index;
    }
    this.modalRef.hide();
  }
  deleteQuestion(index) {
    this.Queries.splice(index, 1);
    this.activeQuestion = (this.Queries.length === this.activeQuestion) ? (this.activeQuestion - 1) : this.activeQuestion;

  }
  addAnswers() {

  }
  deleteAnswer() {

  }
}
