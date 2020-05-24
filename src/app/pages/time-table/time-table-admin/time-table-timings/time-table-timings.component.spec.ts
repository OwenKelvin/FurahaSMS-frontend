import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableTimingsComponent } from './time-table-timings.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';

describe('TimeTableTimingsComponent', () => {
  let component: TimeTableTimingsComponent;
  let fixture: ComponentFixture<TimeTableTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule,
        AccordionModule.forRoot()
      ],
      declarations: [TimeTableTimingsComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
