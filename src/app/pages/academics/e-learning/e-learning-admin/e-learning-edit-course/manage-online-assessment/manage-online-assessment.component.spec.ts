import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOnlineAssessmentComponent } from './manage-online-assessment.component';

describe('ManageOnlineAssessmentComponent', () => {
  let component: ManageOnlineAssessmentComponent;
  let fixture: ComponentFixture<ManageOnlineAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOnlineAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOnlineAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
