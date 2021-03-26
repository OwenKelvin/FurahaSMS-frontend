import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TimeTableAdminComponent} from './time-table-admin.component';
import {TimeTableTimingsComponent} from './time-table-timings/time-table-timings.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ReactiveComponentModule} from '@ngrx/component';

describe('TimeTableAdminComponent', () => {
  let component: TimeTableAdminComponent;
  let fixture: ComponentFixture<TimeTableAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [TimeTableAdminComponent, TimeTableTimingsComponent],
      providers: [
        {
          provide: Store,
          useValue: of({id: 1})
        }

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
