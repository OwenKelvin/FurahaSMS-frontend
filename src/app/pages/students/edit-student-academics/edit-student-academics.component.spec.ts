import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EditStudentAcademicsComponent} from './edit-student-academics.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppCheckboxModule} from '../../../shared/checkbox/checkbox.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {studentProfileFeatureKey, reducer} from '../store/reducers/student-profile.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('EditStudentAcademicsComponent', () => {
  let component: EditStudentAcademicsComponent;
  let fixture: ComponentFixture<EditStudentAcademicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        AppCheckboxModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(studentProfileFeatureKey, reducer),
        ReactiveComponentModule
      ],
      declarations: [EditStudentAcademicsComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentAcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
