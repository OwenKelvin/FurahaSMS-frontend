import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabErrorStateComponent } from './tab-error-state.component';

describe('TabErrorStateComponent', () => {
  let component: TabErrorStateComponent;
  let fixture: ComponentFixture<TabErrorStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabErrorStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabErrorStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
