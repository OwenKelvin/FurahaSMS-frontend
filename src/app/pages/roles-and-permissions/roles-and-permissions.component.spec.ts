import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';

describe('RolesAndPermissionsComponent', () => {
  let component: RolesAndPermissionsComponent;
  let fixture: ComponentFixture<RolesAndPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule
      ],
      declarations: [ RolesAndPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesAndPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
