import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentDashboardComponent} from './student-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

describe('StudentDashboardComponent', () => {
  let component: StudentDashboardComponent;
  let fixture: ComponentFixture<StudentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule
      ],
      declarations: [StudentDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
