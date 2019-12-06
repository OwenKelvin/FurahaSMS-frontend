import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWithCenterComponent } from './full-with-center.component';

describe('FullWithCenterComponent', () => {
  let component: FullWithCenterComponent;
  let fixture: ComponentFixture<FullWithCenterComponent>;

  beforeEach(async(() => {
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
