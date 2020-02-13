import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBankArchivesComponent } from './exam-bank-archives.component';

describe('ExamBankArchivesComponent', () => {
  let component: ExamBankArchivesComponent;
  let fixture: ComponentFixture<ExamBankArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamBankArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBankArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
