import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearFinancialPlanComponent } from './view-academic-year-financial-plan.component';

describe('ViewAcademicYearFinancialPlanComponent', () => {
  let component: ViewAcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<ViewAcademicYearFinancialPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAcademicYearFinancialPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
