import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingBubbleComponent } from './loading-bubble.component';

describe('LoadingBubbleComponent', () => {
  let component: LoadingBubbleComponent;
  let fixture: ComponentFixture<LoadingBubbleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
