import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherSubjectsComponent } from './view-teacher-subjects.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from '../../../modules/app-loading-bubble';

describe('ViewTeacherSubjectsComponent', () => {
  let component: ViewTeacherSubjectsComponent;
  let fixture: ComponentFixture<ViewTeacherSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppLoadingBubbleModule,

      ],
      declarations: [ ViewTeacherSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
