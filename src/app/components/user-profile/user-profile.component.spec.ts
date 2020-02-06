import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.profile = {}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
