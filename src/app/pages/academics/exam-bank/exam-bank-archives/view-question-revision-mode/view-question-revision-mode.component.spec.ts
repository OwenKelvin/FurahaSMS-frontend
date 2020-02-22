import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionRevisionModeComponent } from './view-question-revision-mode.component';

describe('ViewQuestionRevisionModeComponent', () => {
  let component: ViewQuestionRevisionModeComponent;
  let fixture: ComponentFixture<ViewQuestionRevisionModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuestionRevisionModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuestionRevisionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
