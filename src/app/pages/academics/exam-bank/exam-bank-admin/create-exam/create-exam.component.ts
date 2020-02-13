import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ExamPaperService } from '../../services/exam-paper.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Store } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit, OnDestroy {
  newExamForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  componentIsActive: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private examPaperService: ExamPaperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.isSubmitting = false;
    this.newExamForm = this.fb.group({
      name: ['', [Validators.required]],
      unit: ['', Validators.required],
      unitLevel: ['', Validators.required],
      instructions: this.fb.array([
        this.newInstructions
      ])
    });

  }
  get examInstructions(): FormArray {
    return this.newExamForm.get('instructions') as FormArray;
  }

  addInstruction() {
    this.examInstructions.push(this.newInstructions);
  }
  get newInstructions() {
    return this.fb.group({
      description: ['', [Validators.required]]
    });
  }
  deleteInstruction(i) {
    const deletionConfirmed = confirm(`Are You Sure you wish to delete instruction ${i + 1}`);
    if (deletionConfirmed) {
      this.examInstructions.controls.splice(i, 1);
    }
  }
  submitExamPaperForm() {
    if (this.newExamForm.valid) {
      this.isSubmitting = true;
      this.examPaperService.save(this.newExamForm.value)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(res => {
        this.isSubmitting = false;
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastHeader: 'Success',
          toastTime: 'Just Now',
          toastBody: res.message
        }));
        this.router.navigate(['academics', 'exam-bank', 'admin', 'exams', res.data.id, 'view']);
      }, () => this.isSubmitting = false);
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
