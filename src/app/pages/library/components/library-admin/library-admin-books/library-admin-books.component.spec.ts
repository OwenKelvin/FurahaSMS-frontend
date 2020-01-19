import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminBooksComponent } from './library-admin-books.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibraryAdminBooksComponent', () => {
  let component: LibraryAdminBooksComponent;
  let fixture: ComponentFixture<LibraryAdminBooksComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        AppDashboardLinksModule,
        RouterTestingModule
      ],
      declarations: [ LibraryAdminBooksComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminBooksComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
