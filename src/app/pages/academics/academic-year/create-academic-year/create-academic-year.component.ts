import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AcademicYearService} from 'src/app/pages/academics/services/academic-year.service';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-academic-year',
  templateUrl: './create-academic-year.component.html',
  styleUrls: ['./create-academic-year.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAcademicYearComponent extends subscribedContainerMixin(formMixin()) {
  academicYearForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private academicYear: AcademicYearService,
    private router: Router
  ) {
    super();
  }

  submitAcademicYearForm() {
    if (this.academicYearForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.academicYear.save(this.academicYearForm.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe({
          next: item => this.router.navigate(['/academics/academic-year/', item.id]).then(),
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }

}
