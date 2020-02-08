import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSemesterComponent } from './view-semester.component';

describe('ViewSemesterComponent', () => {
  let component: ViewSemesterComponent;
  let fixture: ComponentFixture<ViewSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
