import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentAcademicsComponent } from './create-student-academics.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentsModule } from '../students.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('CreateStudentAcademicsComponent', () => {
  let component: CreateStudentAcademicsComponent;
  let fixture: ComponentFixture<CreateStudentAcademicsComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        ReactiveFormsModule,
        FormsModule,
        StudentsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule
      ],
      declarations: [ ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentAcademicsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
