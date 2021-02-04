import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FullWithCenterComponent } from './full-with-center.component';

describe('FullWithCenterComponent', () => {
  let component: FullWithCenterComponent;
  let fixture: ComponentFixture<FullWithCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWithCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWithCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
