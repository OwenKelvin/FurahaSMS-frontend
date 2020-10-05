import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicOnlineAssessmentListComponent } from './topic-online-assessment-list.component';

describe('TopicOnlineAssessmentListComponent', () => {
  let component: TopicOnlineAssessmentListComponent;
  let fixture: ComponentFixture<TopicOnlineAssessmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicOnlineAssessmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicOnlineAssessmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
