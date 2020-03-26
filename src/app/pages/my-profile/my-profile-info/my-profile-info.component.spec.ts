import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileInfoComponent } from './my-profile-info.component';

describe('MyProfileInfoComponent', () => {
  let component: MyProfileInfoComponent;
  let fixture: ComponentFixture<MyProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
