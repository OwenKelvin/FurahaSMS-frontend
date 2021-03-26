import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AdminExamPaperEditComponent} from './admin-exam-paper-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {ModalModule} from 'ngx-bootstrap/modal';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {EditorModule} from '@tinymce/tinymce-angular';
import {NgSelectModule} from '@ng-select/ng-select';
import {QuestionViewComponent} from '../question-view/question-view.component';
import {Number2AlphabetModule} from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {reducer} from '../../store/reducers/exam-paper.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AdminExamPaperEditComponent', () => {
  let component: AdminExamPaperEditComponent;
  let fixture: ComponentFixture<AdminExamPaperEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppLoadingBubbleModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('examPaper', reducer),
        ModalModule.forRoot(),
        EditorModule,
        NgSelectModule,
        Number2AlphabetModule,
        ReactiveComponentModule
      ],
      declarations: [AdminExamPaperEditComponent, QuestionViewComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {parent: {paramMap: of({get: () => 1})}}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamPaperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
