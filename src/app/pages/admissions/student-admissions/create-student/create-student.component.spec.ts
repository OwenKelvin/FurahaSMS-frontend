import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateStudentComponent} from './create-student.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from '../../../../components/input/input.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LabelStarRequiredComponent} from '../../../../components/label-star-required/label-star-required.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GenderService} from 'src/app/services/gender.service';
import {of} from 'rxjs';
import {ReligionService} from 'src/app/services/religion.service';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateStudentComponent', () => {
  let component: CreateStudentComponent;
  let fixture: ComponentFixture<CreateStudentComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppInputModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [CreateStudentComponent, InputComponent, LabelStarRequiredComponent],
      providers: [
        reducerProvider,
        {
          provide: GenderService,
          useValue: {
            loadAll$: of([{}])

          }
        },
        {
          provide: ReligionService,
          useValue: {
            loadAll$: of([{}])

          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
