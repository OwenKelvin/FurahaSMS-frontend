import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminUsersComponent } from './library-admin-users.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { DashboardLinksComponent } from '../../../../dashboard/dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../../../../dashboard/dashboard-link/dashboard-link.component';

describe('LibraryAdminUsersComponent', () => {
  let component: LibraryAdminUsersComponent;
  let fixture: ComponentFixture<LibraryAdminUsersComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ LibraryAdminUsersComponent, DashboardLinksComponent, DashboardLinkComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminUsersComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
