import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningTopicObjectivesComponent } from './e-learning-topic-objectives.component';

describe('ELearningTopicObjectivesComponent', () => {
  let component: ELearningTopicObjectivesComponent;
  let fixture: ComponentFixture<ELearningTopicObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningTopicObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningTopicObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
