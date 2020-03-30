import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolesPermissionsComponent } from './user-roles-permissions.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserRolesPermissionsComponent', () => {
  let component: UserRolesPermissionsComponent;
  let fixture: ComponentFixture<UserRolesPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule
      ],
      declarations: [ UserRolesPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
