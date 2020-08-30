import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditStudentAcademicsComponent} from './edit-student-academics.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppCheckboxModule} from '../../../shared/checkbox/checkbox.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';

describe('EditStudentAcademicsComponent', () => {
  let component: EditStudentAcademicsComponent;
  let fixture: ComponentFixture<EditStudentAcademicsComponent>;

  beforeEach(async(() => {
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
