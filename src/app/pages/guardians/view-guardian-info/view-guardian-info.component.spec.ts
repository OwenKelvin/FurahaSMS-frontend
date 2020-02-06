import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianInfoComponent } from './view-guardian-info.component';

describe('ViewGuardianInfoComponent', () => {
  let component: ViewGuardianInfoComponent;
  let fixture: ComponentFixture<ViewGuardianInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuardianInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
