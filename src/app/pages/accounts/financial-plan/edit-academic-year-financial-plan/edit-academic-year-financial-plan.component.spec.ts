import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademicYearFinancialPlanComponent } from './edit-academic-year-financial-plan.component';

describe('EditAcademicYearFinancialPlanComponent', () => {
  let component: EditAcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<EditAcademicYearFinancialPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcademicYearFinancialPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
