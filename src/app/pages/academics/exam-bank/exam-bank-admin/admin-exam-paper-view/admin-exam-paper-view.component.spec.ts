import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AdminExamPaperViewComponent} from './admin-exam-paper-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {QuestionViewComponent} from '../question-view/question-view.component';
import {Number2AlphabetModule} from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {reducer} from '../../store/reducers/exam-paper.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AdminExamPaperViewComponent', () => {
  let component: AdminExamPaperViewComponent;
  let fixture: ComponentFixture<AdminExamPaperViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature('examPaper', reducer),
        Number2AlphabetModule,
        ReactiveComponentModule
      ],
      declarations: [AdminExamPaperViewComponent, QuestionViewComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: () => 1})}
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamPaperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
