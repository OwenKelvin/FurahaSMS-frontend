import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTagComponent } from './view-tag.component';

describe('ViewTagComponent', () => {
  let component: ViewTagComponent;
  let fixture: ComponentFixture<ViewTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
