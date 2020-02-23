import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamViewModeComponent } from './exam-view-mode.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExamViewModeComponent', () => {
  let component: ExamViewModeComponent;
  let fixture: ComponentFixture<ExamViewModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ExamViewModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamViewModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});