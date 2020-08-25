import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableAdminComponent } from './time-table-admin.component';
import { TimeTableTimingsComponent } from './time-table-timings/time-table-timings.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';

describe('TimeTableAdminComponent', () => {
  let component: TimeTableAdminComponent;
  let fixture: ComponentFixture<TimeTableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        HttpClientTestingModule,
        AccordionModule.forRoot()
      ],
      declarations: [TimeTableAdminComponent, TimeTableTimingsComponent],
      providers: [
        {
          provide: Store,
          useValue: of({ id: 1})
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
