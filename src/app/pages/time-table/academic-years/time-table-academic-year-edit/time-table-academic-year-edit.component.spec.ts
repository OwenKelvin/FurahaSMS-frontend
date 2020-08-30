import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeTableAcademicYearEditComponent} from './time-table-academic-year-edit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {AppStarLabelRequiredModule} from '../../../../components/label-star-required/app-star-label-required';

describe('TimeTableAcademicYearEditComponent', () => {
  let component: TimeTableAcademicYearEditComponent;
  let fixture: ComponentFixture<TimeTableAcademicYearEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppStarLabelRequiredModule
      ],
      declarations: [TimeTableAcademicYearEditComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {paramMap: of({get: ()=> 1})},
            paramMap: of({get: ()=> 1}),
            snapshot: { }
          }
        },
      ]
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
