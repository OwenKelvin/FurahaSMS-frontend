import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBankAdminComponent } from './exam-bank-admin.component';

describe('ExamBankAdminComponent', () => {
  let component: ExamBankAdminComponent;
  let fixture: ComponentFixture<ExamBankAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamBankAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBankAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
