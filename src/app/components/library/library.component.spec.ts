import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { DashboardLinksComponent } from '../dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../dashboard-link/dashboard-link.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { LibrarySearchCatalogueComponent } from '../library-search-catalogue/library-search-catalogue.component';
import { LibraryMyAccountComponent } from '../library-my-account/library-my-account.component';
import { LibraryAdminComponent } from '../library-admin/library-admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuSearchComponent } from '../menu-search/menu-search.component';
import { UserButtonComponent } from '../user-button/user-button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        LibraryRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        LibrarySearchCatalogueComponent,
        LibraryComponent,
        DashboardLinksComponent,
        DashboardLinkComponent,
        LayoutComponent,
        LibraryMyAccountComponent,
        LibraryAdminComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        MenuSearchComponent,
        UserButtonComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
