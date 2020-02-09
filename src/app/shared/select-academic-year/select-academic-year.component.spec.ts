import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAcademicYearComponent } from './select-academic-year.component';

describe('SelectAcademicYearComponent', () => {
  let component: SelectAcademicYearComponent;
  let fixture: ComponentFixture<SelectAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
