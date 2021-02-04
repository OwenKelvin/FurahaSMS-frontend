import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateSemesterComponent } from './create-semester.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AppCrudModule} from '../../../../../components/crud/app-crud.module';

describe('CreateSemesterComponent', () => {
  let component: CreateSemesterComponent;
  let fixture: ComponentFixture<CreateSemesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ErrorModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppCrudModule
      ],
      declarations: [CreateSemesterComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
