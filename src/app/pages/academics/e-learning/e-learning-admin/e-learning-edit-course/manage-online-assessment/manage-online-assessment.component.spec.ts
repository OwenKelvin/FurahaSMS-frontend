import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ManageOnlineAssessmentComponent} from './manage-online-assessment.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../../../store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DurationModule} from '../../../../../../shared/duration/duration.module';
import {AppInputModule} from '../../../../../../components/input/app-input.module';
import {DurationPickerModule} from 'ngx-duration-picker';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ManageOnlineAssessmentComponent', () => {
  let component: ManageOnlineAssessmentComponent;
  let fixture: ComponentFixture<ManageOnlineAssessmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DurationPickerModule,
        DurationModule,
        AppInputModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ModalModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [ManageOnlineAssessmentComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOnlineAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
