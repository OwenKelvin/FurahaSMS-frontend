import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnderMaintenanceComponent } from './page-under-maintenance.component';

describe('PageUnderMaintenanceComponent', () => {
  let component: PageUnderMaintenanceComponent;
  let fixture: ComponentFixture<PageUnderMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUnderMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnderMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
