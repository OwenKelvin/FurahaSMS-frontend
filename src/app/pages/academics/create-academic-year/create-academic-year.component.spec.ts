import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademicYearComponent } from './create-academic-year.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../components/input/input.component';
import { ErrorComponent } from '../../../components/error/error.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateAcademicYearComponent', () => {
  let component: CreateAcademicYearComponent;
  let fixture: ComponentFixture<CreateAcademicYearComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ CreateAcademicYearComponent, InputComponent, ErrorComponent  ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
