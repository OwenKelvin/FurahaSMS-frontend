import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAcademicYearEditComponent } from './time-table-academic-year-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeTableAcademicYearEditComponent', () => {
  let component: TimeTableAcademicYearEditComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ TimeTableAcademicYearEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
