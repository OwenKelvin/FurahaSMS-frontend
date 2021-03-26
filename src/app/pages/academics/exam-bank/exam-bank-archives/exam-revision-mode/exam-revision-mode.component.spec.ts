import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ExamRevisionModeComponent} from './exam-revision-mode.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ViewQuestionRevisionModeComponent} from '../view-question-revision-mode/view-question-revision-mode.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {FormsModule} from '@angular/forms';
import {StoreModule, Store} from '@ngrx/store';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {Number2AlphabetModule} from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import {AppCheckboxModule} from 'src/app/shared/checkbox/checkbox.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {examPaperFeatureKey, reducer, initialState} from '../../store/reducers/exam-paper.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ExamRevisionModeComponent', () => {
  let component: ExamRevisionModeComponent;
  let fixture: ComponentFixture<ExamRevisionModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppLoadingBubbleModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(examPaperFeatureKey, reducer),
        Number2AlphabetModule,
        AppCheckboxModule,
        ReactiveComponentModule
      ],
      declarations: [
        ExamRevisionModeComponent,
        ViewQuestionRevisionModeComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 1})
            }
          }
        },
        {
          provide: Store,
          useValue: of({[examPaperFeatureKey]: initialState})
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRevisionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
