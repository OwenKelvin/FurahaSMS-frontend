import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeacherComponent } from './create-teacher.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('CreateTeacherComponent', () => {
  let component: CreateTeacherComponent;
  let fixture: ComponentFixture<CreateTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      declarations: [CreateTeacherComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
