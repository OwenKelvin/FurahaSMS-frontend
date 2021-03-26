import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SelectAcademicYearComponent} from './select-academic-year.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {reducerProvider} from 'src/app/store/reducers';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveComponentModule} from '@ngrx/component';

describe('SelectAcademicYearComponent', () => {
  let component: SelectAcademicYearComponent;
  let fixture: ComponentFixture<SelectAcademicYearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NgSelectModule,
        ReactiveComponentModule
      ],
      declarations: [SelectAcademicYearComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
