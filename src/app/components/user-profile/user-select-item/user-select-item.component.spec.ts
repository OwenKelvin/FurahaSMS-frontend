import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectItemComponent } from './user-select-item.component';

describe('UserSelectItemComponent', () => {
  let component: UserSelectItemComponent;
  let fixture: ComponentFixture<UserSelectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
