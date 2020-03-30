import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentGuardianComponent } from './create-student-guardian.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../../components/select/select.component';
import { InputComponent } from '../../../components/input/input.component';
import { TelInputComponent } from '../../../components/tel-input/tel-input.component';
import { OrdinalPipe } from 'src/app/pipes/ordinal.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ValidateSubmitButtonsComponent } from 'src/app/components/validate-submit-buttons/validate-submit-buttons.component';

describe('CreateStudentGuardianComponent', () => {
  let component: CreateStudentGuardianComponent;
  let fixture: ComponentFixture<CreateStudentGuardianComponent>;
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
        NgSelectModule,
        HttpClientTestingModule,
      ],
      declarations: [
        CreateStudentGuardianComponent,
        SelectComponent,
        InputComponent,
        TelInputComponent,
        OrdinalPipe,
        ValidateSubmitButtonsComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => 1
            })
          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentGuardianComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
