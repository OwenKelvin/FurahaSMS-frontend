import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminUsersComponent } from './library-admin-users.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { RouterTestingModule } from '@angular/router/testing';


describe('LibraryAdminUsersComponent', () => {
  let component: LibraryAdminUsersComponent;
  let fixture: ComponentFixture<LibraryAdminUsersComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}),
        AppDashboardLinksModule,
        RouterTestingModule
      ],
      declarations: [ LibraryAdminUsersComponent]
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
