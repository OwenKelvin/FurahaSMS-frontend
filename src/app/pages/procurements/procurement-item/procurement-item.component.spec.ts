import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProcurementItemComponent } from './procurement-item.component';

describe('ProcurementItemComponent', () => {
  let component: ProcurementItemComponent;
  let fixture: ComponentFixture<ProcurementItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementItemComponent);
    component = fixture.componentInstance;
    component.item = { id: 1 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
