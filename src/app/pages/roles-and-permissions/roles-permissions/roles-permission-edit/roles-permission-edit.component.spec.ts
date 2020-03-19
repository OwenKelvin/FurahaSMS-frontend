import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionEditComponent } from './roles-permission-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCheckboxModule } from 'src/app/shared/checkbox/checkbox.module';
import { AppInputModule } from 'src/app/modules/app-input.module';

describe('RolesPermissionEditComponent', () => {
  let component: RolesPermissionEditComponent;
  let fixture: ComponentFixture<RolesPermissionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        FormsModule,
        ReactiveFormsModule,
        AppCheckboxModule,
        AppInputModule

      ],
      declarations: [ RolesPermissionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
