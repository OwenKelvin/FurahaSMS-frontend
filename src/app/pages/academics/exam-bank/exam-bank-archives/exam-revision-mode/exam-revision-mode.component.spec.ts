import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRevisionModeComponent } from './exam-revision-mode.component';

describe('ExamRevisionModeComponent', () => {
  let component: ExamRevisionModeComponent;
  let fixture: ComponentFixture<ExamRevisionModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRevisionModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRevisionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
