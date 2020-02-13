import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';

@Component({
  selector: 'app-admin-exam-paper-edit',
  templateUrl: './admin-exam-paper-edit.component.html',
  styleUrls: ['./admin-exam-paper-edit.component.css']
})
export class AdminExamPaperEditComponent implements OnInit, OnDestroy, CanDeactivateGuard {
  examPaper$: Observable<any>;
  activeQuestion: number;
  Queries: { description: string; }[];
  modalRef: BsModalRef;
  dialog: any;
  editDialogForm: FormGroup;
  componentIsActive: boolean;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>, private modalService: BsModalService) { }

  ngOnInit() {
    this.submitted = false;
    this.componentIsActive =  true;
    this.dialog = {
      title: 'Add Item',
      type: 'new',
      value: {
      }
    };
    this.examPaper$ = this.store.pipe(select(selectExamPaperItemState(1)));
    this.activeQuestion = 0;

    this.Queries = Array(10).fill(1).map((i, j) => ({
      description: `${Math.random().toString(36)} asd rtyui dfghj  wrty sdfgh dfghjke wtyu dfgh`,
      answers: [{ description: 'qwertyu1111' }, { description: 'qwertyu222222' }],
      multipleChoices: true,
      multipleAnswers: false,
      correctAnswerDescription: 'qwertyu',
      points: 2
      
    }));
    
    this.resetForm();
    this.multipleChoices.valueChanges
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(value => {
        if (value) {
          this.multipleAnswers.setValidators([Validators.required]);
        } else {
          this.multipleAnswers.setValidators([])
        }
        this.editDialogForm.updateValueAndValidity();
      });
  }
  resetForm(question: any = undefined) {
    const answers = (question && question.answers) ? question.answers : []
    this.editDialogForm = this.fb.group({
      description: ['', Validators.required],
      multipleChoices: [true],
      multipleAnswers: [false, [Validators.required]],
      answers: this.fb.array([]),
      correctAnswerDescription: [''],
      points: [2, [Validators.required]]
    });
    [...answers].forEach(() => this.addAnswers());
    this.editDialogForm.patchValue({ ...question});
  }
  openModal(template: TemplateRef<any>, action: string, i) {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
    }
    switch (action) {
      
      case 'add-before':
        this.dialog.title = `New Question before Qn ${i + 1 }`;
        this.dialog.value = {};
        this.dialog.type = 'new';
        this.dialog.index = i;
        this.resetForm();
        break;
      case 'add-after':
        this.dialog.title = `New Question after Qn ${i + 1}`;
        this.dialog.value = {};
        this.dialog.type = 'new';
        this.dialog.index = i + 1;
        this.resetForm();
        break;
      case 'edit':
        this.dialog.title = `Edit Question ${i + 1}`;
        this.dialog.value = { ...this.Queries[i] };
        this.dialog.type = 'edit';
        this.dialog.index = i;
        this.resetForm({ ...this.Queries[i] });
        
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
      this.Queries[this.dialog.index] = { ...this.editDialogForm.value };
    } else {
      this.Queries.splice(this.dialog.index, 0, this.editDialogForm.value);
      this.activeQuestion = this.dialog.index;
    }
    this.modalRef.hide();
  }
  deleteQuestion(index) {
    this.Queries.splice(index, 1);
    this.activeQuestion = (this.Queries.length === this.activeQuestion) ? (this.activeQuestion - 1) : this.activeQuestion;

  }
  get answers(): FormArray {
    return this.editDialogForm.get('answers') as FormArray
  }
  get multipleChoices(): FormGroup {
    return this.editDialogForm.get('multipleChoices') as FormGroup
  }
  get multipleAnswers(): FormGroup {
    return this.editDialogForm.get('multipleAnswers') as FormGroup
  }
  addAnswers() {
    this.answers.push(this.fb.group({
      isCorrect: [false],
      description: ['', [Validators.required]],
    }));
  }
  deleteAnswer(i) {
    const deletionConfirmed = confirm(`Are You sure you wish to delete answer`);
    if (deletionConfirmed) {
      this.answers.controls.splice(i, 1);
      this.answers.updateValueAndValidity();
    }
  }
  canDeactivate() {
    return this.submitted || confirm('Your Changes will be lost, continue ? ')
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
