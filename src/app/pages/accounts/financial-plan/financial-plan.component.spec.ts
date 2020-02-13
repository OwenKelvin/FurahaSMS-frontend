import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPlanComponent } from './financial-plan.component';
import { SelectAcademicYearComponent } from 'src/app/shared/select-academic-year/select-academic-year.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { reducerProvider } from 'src/app/store/reducers';

describe('FinancialPlanComponent', () => {
  let component: FinancialPlanComponent;
  let fixture: ComponentFixture<FinancialPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule
      ],
      declarations: [FinancialPlanComponent, SelectAcademicYearComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
