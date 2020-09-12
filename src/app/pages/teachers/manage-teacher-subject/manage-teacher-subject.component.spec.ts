import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageTeacherSubjectComponent} from './manage-teacher-subject.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

describe('ManageTeacherSubjectComponent', () => {
  let component: ManageTeacherSubjectComponent;
  let fixture: ComponentFixture<ManageTeacherSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule, HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ManageTeacherSubjectComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {

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
