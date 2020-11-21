import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcademicYearTimeTablesComponent } from './academic-year-time-tables.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AcademicYearTimeTablesComponent', () => {
  let component: AcademicYearTimeTablesComponent;
  let fixture: ComponentFixture<AcademicYearTimeTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ AcademicYearTimeTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearTimeTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
