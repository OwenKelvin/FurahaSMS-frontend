import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningDeleteLearningOutcomeComponent } from './e-learning-delete-learning-outcome.component';

describe('ELearningDeleteLearningOutcomeComponent', () => {
  let component: ELearningDeleteLearningOutcomeComponent;
  let fixture: ComponentFixture<ELearningDeleteLearningOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningDeleteLearningOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningDeleteLearningOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
