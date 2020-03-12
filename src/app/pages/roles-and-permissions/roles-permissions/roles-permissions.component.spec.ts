import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionsComponent } from './roles-permissions.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterTestingModule } from '@angular/router/testing';

describe('RolesPermissionsComponent', () => {
  let component: RolesPermissionsComponent;
  let fixture: ComponentFixture<RolesPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppLoadingBubbleModule,
        RouterTestingModule
      ],
      declarations: [ RolesPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
