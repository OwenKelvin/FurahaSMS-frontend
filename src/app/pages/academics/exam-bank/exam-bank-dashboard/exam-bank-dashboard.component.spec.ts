import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBankDashboardComponent } from './exam-bank-dashboard.component';

describe('ExamBankDashboardComponent', () => {
  let component: ExamBankDashboardComponent;
  let fixture: ComponentFixture<ExamBankDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamBankDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBankDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
