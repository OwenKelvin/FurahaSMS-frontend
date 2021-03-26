import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreateAcademicYearTimeTableComponent} from './create-academic-year-time-table.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppInputModule} from '../../../../components/input/app-input.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateAcademicYearTimeTableComponent', () => {
  let component: CreateAcademicYearTimeTableComponent;
  let fixture: ComponentFixture<CreateAcademicYearTimeTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppInputModule,
        HttpClientTestingModule,
        NgSelectModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [CreateAcademicYearTimeTableComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcademicYearTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
