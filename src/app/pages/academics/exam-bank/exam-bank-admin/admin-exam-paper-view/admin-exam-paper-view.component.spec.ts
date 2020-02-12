import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamPaperViewComponent } from './admin-exam-paper-view.component';

describe('AdminExamPaperViewComponent', () => {
  let component: AdminExamPaperViewComponent;
  let fixture: ComponentFixture<AdminExamPaperViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamPaperViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamPaperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
