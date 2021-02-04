import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabelStarRequiredComponent } from './label-star-required.component';

describe('LabelStarRequiredComponent', () => {
  let component: LabelStarRequiredComponent;
  let fixture: ComponentFixture<LabelStarRequiredComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelStarRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelStarRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
