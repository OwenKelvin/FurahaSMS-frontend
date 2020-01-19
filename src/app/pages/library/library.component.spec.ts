import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryAdminUsersComponent } from './components/library-admin/library-admin-users/library-admin-users.component';
import { LibraryAdminBooksComponent } from './components/library-admin/library-admin-books/library-admin-books.component';
import { LibraryAdminAuthorsComponent } from './components/library-admin/library-admin-authors/library-admin-authors.component';
import { LibraryAdminPublishersComponent } from './components/library-admin/library-admin-publishers/library-admin-publishers.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LibrarySearchCatalogueComponent } from './components/library-search-catalogue/library-search-catalogue.component';
import { DashboardLinksComponent } from 'src/app/components/dashboard/dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from 'src/app/components/dashboard/dashboard-link/dashboard-link.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { LibraryMyAccountComponent } from './components/library-my-account/library-my-account.component';
import { LibraryAdminComponent } from './components/library-admin/library-admin.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MenuSearchComponent } from 'src/app/components/menu-search/menu-search.component';
import { UserButtonComponent } from 'src/app/components/user-button/user-button.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { NetworkErrorComponent } from 'src/app/components/network-error/network-error.component';

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
        UserButtonComponent,
        BreadcrumbComponent,
        NetworkErrorComponent,
        LibraryAdminUsersComponent,
        LibraryAdminBooksComponent,
        LibraryAdminAuthorsComponent,
        LibraryAdminPublishersComponent
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
