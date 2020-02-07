import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation.component';
import { AcademicsModule } from '../../academics.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcademicYearUnitAllocationComponent', () => {
  let component: AcademicYearUnitAllocationComponent;
  let fixture: ComponentFixture<AcademicYearUnitAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AcademicsModule, HttpClientTestingModule],
      declarations: [ ]
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
