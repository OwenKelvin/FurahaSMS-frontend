import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStaffComponent } from './create-staff.component';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CreateTeacherComponent } from '../../create-teacher/create-teacher.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';

describe('CreateStaffComponent', () => {
  let component: CreateStaffComponent;
  let fixture: ComponentFixture<CreateStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule,
        AppInputModule
      ],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: of({})
        }
      ],
      declarations: [CreateStaffComponent, CreateTeacherComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
