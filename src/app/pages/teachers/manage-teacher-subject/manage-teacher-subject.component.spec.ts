import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ManageTeacherSubjectComponent} from './manage-teacher-subject.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {teacherProfileFeatureKey, reducer} from '../store/reducers/teacher-profile.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ManageTeacherSubjectComponent', () => {
  let component: ManageTeacherSubjectComponent;
  let fixture: ComponentFixture<ManageTeacherSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(teacherProfileFeatureKey, reducer),
        RouterTestingModule, HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveComponentModule
      ],
      declarations: [ManageTeacherSubjectComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: () => 1})}
          }
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeacherSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
