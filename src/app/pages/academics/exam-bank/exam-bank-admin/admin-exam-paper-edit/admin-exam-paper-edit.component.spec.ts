import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamPaperEditComponent } from './admin-exam-paper-edit.component';

describe('AdminExamPaperEditComponent', () => {
  let component: AdminExamPaperEditComponent;
  let fixture: ComponentFixture<AdminExamPaperEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamPaperEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamPaperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
