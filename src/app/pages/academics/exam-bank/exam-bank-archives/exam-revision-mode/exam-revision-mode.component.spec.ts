import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRevisionModeComponent } from './exam-revision-mode.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewQuestionRevisionModeComponent } from '../view-question-revision-mode/view-question-revision-mode.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ExamRevisionModeComponent', () => {
  let component: ExamRevisionModeComponent;
  let fixture: ComponentFixture<ExamRevisionModeComponent>;

  beforeEach(async(() => {
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
        Number2AlphabetModule,
        AppCheckboxModule
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
          useValue: of({})
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