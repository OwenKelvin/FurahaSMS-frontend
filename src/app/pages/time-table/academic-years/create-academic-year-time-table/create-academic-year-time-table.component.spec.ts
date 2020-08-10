import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademicYearTimeTableComponent } from './create-academic-year-time-table.component';

describe('CreateAcademicYearTimeTableComponent', () => {
  let component: CreateAcademicYearTimeTableComponent;
  let fixture: ComponentFixture<CreateAcademicYearTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAcademicYearTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcademicYearTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
