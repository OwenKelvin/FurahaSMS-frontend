import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolesPermissionsComponent } from './user-roles-permissions.component';
import { ErrorModule } from 'src/app/components/error/error.module';

describe('UserRolesPermissionsComponent', () => {
  let component: UserRolesPermissionsComponent;
  let fixture: ComponentFixture<UserRolesPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ErrorModule ],
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
