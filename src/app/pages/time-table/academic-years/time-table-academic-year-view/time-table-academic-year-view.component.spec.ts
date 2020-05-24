import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAcademicYearViewComponent } from './time-table-academic-year-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeTableAcademicYearViewComponent', () => {
  let component: TimeTableAcademicYearViewComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [TimeTableAcademicYearViewComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAcademicYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
