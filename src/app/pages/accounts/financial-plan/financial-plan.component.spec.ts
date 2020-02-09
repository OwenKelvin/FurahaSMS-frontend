import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPlanComponent } from './financial-plan.component';

describe('FinancialPlanComponent', () => {
  let component: FinancialPlanComponent;
  let fixture: ComponentFixture<FinancialPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPlanComponent ]
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
