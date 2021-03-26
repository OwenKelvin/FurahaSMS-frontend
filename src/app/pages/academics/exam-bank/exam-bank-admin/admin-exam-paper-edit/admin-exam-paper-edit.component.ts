import {Component, OnInit, TemplateRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {Observable} from 'rxjs';
import {selectExamPaperItemState} from '../../store/selectors/exam-paper.selectors';
import {BsModalService} from 'ngx-bootstrap/modal';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {CanDeactivateGuard} from 'src/app/guards/can-deactivate.guard';
import {ExamPaperQuestionsService} from '../../services/exam-paper-questions.service';
import {ActivatedRoute, Router} from '@angular/router';
import {loadExamPapers} from '../../store/actions/exam-paper.actions';
import {answersMatchValidator} from '../../validators/answers-match.validator';
import {IExamPaperQuestion} from '../../interfaces/exam-paper-question.interface';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {formWithEditorMixin} from '../../../../../shared/mixins/form-with-editor.mixin';
import {modalMixin} from '../../../../../shared/mixins/modal.mixin';

@Component({
  selector: 'app-admin-exam-paper-edit',
  templateUrl: './admin-exam-paper-edit.component.html',
  styleUrls: ['./admin-exam-paper-edit.component.css']
})
export class AdminExamPaperEditComponent extends subscribedContainerMixin(modalMixin(formWithEditorMixin()))
  implements OnInit, CanDeactivateGuard {
  examPaper$: Observable<any>;
  activeQuestion = 0;
  queries: IExamPaperQuestion[];
  editDialogForm: FormGroup = this.fb.group({
    id: [],
    description: ['', Validators.required],
    multipleChoices: [1],
    multipleAnswers: [0, [Validators.required]],
    answers: this.fb.array([]),
    correctAnswerDescription: [''],
    points: [2, [Validators.required]],
    tags: this.fb.array([])
  });
  submitted = true;
  questionId$: Observable<any>;
  tagInput = '';
  validated = false;
  dialog: { title: string; value: any; index: number; type: any } = {title: '', value: '', index: 0, type: null};
  editorInitialized = false;
  private store: Store<AppState>;

  constructor(
    private fb: FormBuilder,
    store: Store<AppState>,
    modalService: BsModalService,
    private examPaperQuestionsService: ExamPaperQuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super(modalService, store);
    this.store = store;
  }

  ngOnInit() {
    this.questionId$ =
      (this.route.parent as ActivatedRoute).paramMap.pipe(map(params => params.get('id')));
    this.examPaper$ = this.questionId$.pipe(
      takeUntil(this.destroyed$),
      mergeMap(id => this.store.pipe(select(selectExamPaperItemState(id)))),
      tap(res => {
        if (res) {
          this.queries = res.questions.map((item: any) => ({
            id: item.id,
            correctAnswerDescription: item.correct_answer_description,
            multipleAnswers: item.multiple_answers,
            multipleChoices: item.multiple_choices,
            points: item.points,
            description: item.description,
            tags: item.tags_value,
            answers: item.answers_value.map(({id, description, is_correct: isCorrect}: any) => ({
              id,
              description,
              isCorrect
            }))
          }));
        }
      }));

    this.resetForm();
    this.multipleChoices.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(value => {
        if (value) {
          this.multipleAnswers.setValidators([Validators.required]);
        } else {
          this.multipleAnswers.setValidators([]);
        }
        this.editDialogForm.updateValueAndValidity();
      });
  }

  resetForm(question?: any) {
    const answers = (question && question.answers) ? question.answers : [];
    const tags = (question && question.tags) ? question.tags : [];
    while (this.answers.length) {
      this.answers.removeAt(0);
    }
    while (this.tags.length) {
      this.tags.removeAt(0);
    }
    this.editDialogForm.patchValue({
      id: null,
      description: '',
      multipleChoices: 1,
      multipleAnswers: 0,
      correctAnswerDescription: '',
      points: 2
    });
    [...answers].forEach(() => this.addAnswers());
    [...tags].forEach(tag => this.addTag(tag));
    this.editDialogForm.patchValue({...question});
  }

  handleQuestionEdit(template: TemplateRef<any>, $event: any) {
    this.openTemplateModal(template, $event.action, $event.i);
  }

  openTemplateModal(template: TemplateRef<any>, action: string, i: number) {
    this.validated = false;
    this.submitted = false;
    if (document.fullscreenElement !== null) {
      document.exitFullscreen().then();
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
        this.dialog.value = {...this.queries[i]};
        this.dialog.type = 'edit';
        this.dialog.index = i;
        this.resetForm({...this.queries[i]});

        break;
    }
    const config = {
      backdrop: false,
      ignoreBackdropClick: true
    };
    this.openModal({component: template, id: 0, params: config});

    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
  }

  get questions() {
    return this.queries;
  }

  reorderQuestions(data: { move: 'up' | 'down'; index: number }) {
    const {index, move} = data;
    const tmp = this.queries[index];
    const swapIndex = move === 'up' ? (index - 1) : (index + 1);
    this.queries[index] = this.queries[swapIndex];
    this.queries[swapIndex] = tmp;
    this.activeQuestion = swapIndex;
  }

  saveQuestion() {
    this.editDialogForm.setValidators(answersMatchValidator);
    this.editDialogForm.updateValueAndValidity();
    if (this.editDialogForm.invalid) {
      this.validated = true;
    } else {
      if (this.dialog.type === 'edit') {
        this.queries[this.dialog.index] = {...this.editDialogForm.value};
      } else {
        this.queries.splice(this.dialog.index, 0, this.editDialogForm.value);
        this.activeQuestion = this.dialog.index;
      }
      this.modalRef.hide();
    }
  }

  deleteQuestion(index: number) {
    this.queries.splice(index, 1);
    this.activeQuestion = (this.queries.length === this.activeQuestion) ? (this.activeQuestion - 1) : this.activeQuestion;

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

  deleteTag(j: number) {
    const deletionConfirmed = confirm(`Are You sure you wish to delete tag ${this.tags.value[j]} ?`);
    if (deletionConfirmed) {
      this.tags.controls.splice(j, 1);
      this.tags.updateValueAndValidity();
    }
  }

  deleteAnswer(i: number) {
    const deletionConfirmed = confirm(`Are You sure you wish to delete answer`);
    if (deletionConfirmed) {
      this.answers.controls.splice(i, 1);
      this.answers.updateValueAndValidity();
    }
  }

  saveExamQuestions() {
    this.submitInProgressSubject$.next(true);
    const data = this.queries;
    this.questionId$.pipe(
      mergeMap(examPaperId => this.examPaperQuestionsService.store({examPaperId, data})),
      takeUntil(this.destroyed$)
    )
      .subscribe(() => {
        this.submitted = true;
        this.submitInProgressSubject$.next(false);
        this.questionId$.pipe(
          tap((id) => this.store.dispatch(loadExamPapers({id}))),
          takeUntil(this.destroyed$)
        )
          .subscribe(examPaperId => {
            this.router.navigate(['academics', 'exam-bank', 'admin', 'exams', examPaperId, 'view']).then();
          });

      }, () => {
        this.submitInProgressSubject$.next(false);
      });
  }

  canDeactivate() {
    return !this.submitted ? confirm('Your Changes will be lost, continue ? ') : true;
  }

}
