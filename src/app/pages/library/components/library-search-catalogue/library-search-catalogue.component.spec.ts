import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {LibrarySearchCatalogueComponent} from './library-search-catalogue.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {ReactiveComponentModule} from '@ngrx/component';

describe('LibrarySearchCatalogueComponent', () => {
  let component: LibrarySearchCatalogueComponent;
  let fixture: ComponentFixture<LibrarySearchCatalogueComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [
        LibrarySearchCatalogueComponent
      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySearchCatalogueComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
