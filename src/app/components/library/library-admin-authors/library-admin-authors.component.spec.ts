import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminAuthorsComponent } from './library-admin-authors.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('LibraryAdminAuthorsComponent', () => {
  let component: LibraryAdminAuthorsComponent;
  let fixture: ComponentFixture<LibraryAdminAuthorsComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ LibraryAdminAuthorsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminAuthorsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
