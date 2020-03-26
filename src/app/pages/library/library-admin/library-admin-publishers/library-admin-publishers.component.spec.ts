import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminPublishersComponent } from './library-admin-publishers.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibraryAdminPublishersComponent', () => {
  let component: LibraryAdminPublishersComponent;
  let fixture: ComponentFixture<LibraryAdminPublishersComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppViewItemsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [LibraryAdminPublishersComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminPublishersComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
