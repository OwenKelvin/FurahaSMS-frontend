import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySearchCatalogueComponent } from './library-search-catalogue.component';
import { Store, StoreModule } from '@ngrx/store';

describe('LibrarySearchCatalogueComponent', () => {
  let component: LibrarySearchCatalogueComponent;
  let fixture: ComponentFixture<LibrarySearchCatalogueComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ LibrarySearchCatalogueComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySearchCatalogueComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
