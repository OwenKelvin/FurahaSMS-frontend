import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { takeWhile, map, mergeMap, tap } from 'rxjs/operators';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { selectTinyMceConfig } from 'src/app/store/selectors/tinyMCE-config.selector';
import { ExamPaperQuestionsService } from '../../services/exam-paper-questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { loadExamPapers } from '../../store/actions/exam-paper.actions';

const answersMatchValidator = (group: FormGroup): { answersMismatch; } | null => {
  const multipleAnswers = group.get('multipleAnswers').value;
  const multipleChoices = group.get('multipleChoices').value;
  const answers = group.get('answers').value as any[];
  if ((answers.every(({ isCorrect }) => !isCorrect))) {
    return { answersMismatch: 'A question must have at least one answer correct' };
  }
  if (!multipleChoices) {
    if (!(answers.every(({ isCorrect }) => isCorrect))) {
      return { answersMismatch: 'You Have marked Answers to have no choices. All answers for no choice question must be correct' };
    }
  } else {
    if (!multipleAnswers) {
      if (answers.reduce((a, b) => +a + +b.isCorrect, 0) > 1) {
        return { answersMismatch: 'A single choice question can have only 1 correct answer' };
      }
    }
  }

  return null;
};

interface IExamPaperQuestion {
  id: number;
  correctAnswerDescription: string;
  multipleAnswers: boolean;
  multipleChoices: boolean;
  points: number;
  description: string;
  tags: any[];
  answers: any[];

}
@Component({
  selector: 'app-admin-exam-paper-edit',
  templateUrl: './admin-exam-paper-edit.component.html',
  styleUrls: ['./admin-exam-paper-edit.component.css']
})
export class AdminExamPaperEditComponent implements OnInit, OnDestroy, CanDeactivateGuard {
  examPaper$: Observable<any>;
  activeQuestion: number;
  Queries: IExamPaperQuestion[];
  modalRef: BsModalRef;
  dialog: any;
  editDialogForm: FormGroup;
  componentIsActive: boolean;
  submitted: boolean;
  editorInit$: Observable<any>;
  questionId$: Observable<any>;
  editorInit: any;
  tagInput = '';
  isSubmitting: boolean;
  validated = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>, private modalService: BsModalService,
    private examPaperQuestionsService: ExamPaperQuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  editorInitialized = false;
  ngOnInit() {
    this.componentIsActive = true;
    this.editorInit$ = this.store.pipe(select(selectTinyMceConfig));
    this.editorInit$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(conf => { this.editorInit = conf; });
    this.submitted = false;

    this.dialog = {
      title: 'Add Item',
      type: 'new',
      value: {
      }
    };
    this.questionId$ =
      this.route.parent.paramMap.pipe(map(params => params.get('id')));
    this.examPaper$ = this.questionId$
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(mergeMap(id => this.store.pipe(select(selectExamPaperItemState(id)))))
      .pipe(tap(res => {
        if (res) {
          this.Queries = res.questions.map(item => ({
            id: item.id,
            correctAnswerDescription: item.correct_answer_description,
            multipleAnswers: item.multiple_answers,
            multipleChoices: item.multiple_choices,
            points: item.points,
            description: item.description,
            tags: item.tags_value,
            answers: item.answers_value.map(({ id, description, is_correct: isCorrect }) => ({ id, description, isCorrect }))
          }));
        }
      }));
    this.activeQuestion = 0;

    this.resetForm();
    this.multipleChoices.valueChanges
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(value => {
        if (value) {
          this.multipleAnswers.setValidators([Validators.required]);
        } else {
          this.multipleAnswers.setValidators([]);
        }
        this.editDialogForm.updateValueAndValidity();
      });
  }
  resetForm(question: any = undefined) {
    const answers = (question && question.answers) ? question.answers : [];
    const tags = (question && question.tags) ? question.tags : [];
    this.editDialogForm = this.fb.group({
      id: [],
      description: ['', Validators.required],
      multipleChoices: [true],
      multipleAnswers: [false, [Validators.required]],
      answers: this.fb.array([]),
      correctAnswerDescription: [''],
      points: [2, [Validators.required]],
      tags: this.fb.array([])
    });
    [...answers].forEach(() => this.addAnswers());
    [...tags].forEach(tag => this.addTag(tag));
    this.editDialogForm.patchValue({ ...question });
  }
  handleQuestionEdit(template: TemplateRef<any>, $event) {
    this.openModal(template, $event.action, $event.i);
  }
  openModal(template: TemplateRef<any>, action: string, i) {
    this.validated = false;
    this.submitted = false;
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
    }
    switch (action) {

      case 'add-before':
        this.dialog.title = `New Question before Qn ${i + 1}`;
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
    this.editDialogForm.setValidators(answersMatchValidator);
    this.editDialogForm.updateValueAndValidity();
    if (this.editDialogForm.invalid) {
      this.validated = true;
    } else {
      if (this.dialog.type === 'edit') {
        this.Queries[this.dialog.index] = { ...this.editDialogForm.value };
      } else {
        this.Queries.splice(this.dialog.index, 0, this.editDialogForm.value);
        this.activeQuestion = this.dialog.index;
      }
      this.modalRef.hide();
    }
  }
  deleteQuestion(index) {
    this.Queries.splice(index, 1);
    this.activeQuestion = (this.Queries.length === this.activeQuestion) ? (this.activeQuestion - 1) : this.activeQuestion;

  }
  get tags(): FormArray {
    return this.editDialogForm.get('tags') as FormArray;
  }
  get answers(): FormArray {
    return this.editDialogForm.get('answers') as FormArray;
  }
  get multipleChoices(): FormGroup {
    return this.editDialogForm.get('multipleChoices') as FormGroup;
  }
  get multipleAnswers(): FormGroup {
    return this.editDialogForm.get('multipleAnswers') as FormGroup;
  }
  addAnswers() {
    this.answers.push(this.fb.group({
      id: [null],
      isCorrect: [false],
      description: ['', [Validators.required]],
    }));
  }
  addTag(tag: string) {
    this.tags.push(this.fb.control(tag));
    this.tagInput = '';
    this.tags.updateValueAndValidity();
  }
  deleteTag(j) {
    const deletionConfirmed = confirm(`Are You sure you wish to delete tag ${this.tags.value[j]} ?`);
    if (deletionConfirmed) {
      this.tags.controls.splice(j, 1);
      this.tags.updateValueAndValidity();
    }
  }
  deleteAnswer(i) {
    const deletionConfirmed = confirm(`Are You sure you wish to delete answer`);
    if (deletionConfirmed) {
      this.answers.controls.splice(i, 1);
      this.answers.updateValueAndValidity();
    }
  }
  saveExamQuestions() {
    this.isSubmitting = true;
    const data = this.Queries;
    this.questionId$
      .pipe(mergeMap(examPaperId => this.examPaperQuestionsService.store({ examPaperId, data })))
      .subscribe(res => {
        this.submitted = true;
        this.isSubmitting = false;
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: res.message,
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));
        this.questionId$
          .pipe(tap((id) => this.store.dispatch(loadExamPapers({ id }))))
          .subscribe(examPaperId => {
            this.router.navigate(['academics', 'exam-bank', 'admin', 'exams', examPaperId, 'view']);
          });

      }, err => {
        this.isSubmitting = false;
      });
  }
  canDeactivate() {
    return this.submitted || confirm('Your Changes will be lost, continue ? ');
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
