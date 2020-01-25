import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation.component';

describe('AcademicYearUnitAllocationComponent', () => {
  let component: AcademicYearUnitAllocationComponent;
  let fixture: ComponentFixture<AcademicYearUnitAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicYearUnitAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearUnitAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
