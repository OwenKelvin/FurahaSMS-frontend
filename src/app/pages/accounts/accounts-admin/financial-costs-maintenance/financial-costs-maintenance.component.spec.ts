import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCostsMaintenanceComponent } from './financial-costs-maintenance.component';

describe('FinancialCostsMaintenanceComponent', () => {
  let component: FinancialCostsMaintenanceComponent;
  let fixture: ComponentFixture<FinancialCostsMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialCostsMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialCostsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
