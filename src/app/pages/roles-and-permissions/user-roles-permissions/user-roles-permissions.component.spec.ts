import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserRolesPermissionsComponent } from './user-roles-permissions.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';

describe('UserRolesPermissionsComponent', () => {
  let component: UserRolesPermissionsComponent;
  let fixture: ComponentFixture<UserRolesPermissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule,
        FormErrorsModule
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
