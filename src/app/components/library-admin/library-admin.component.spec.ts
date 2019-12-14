import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminComponent } from './library-admin.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('LibraryAdminComponent', () => {
  let component: LibraryAdminComponent;
  let fixture: ComponentFixture<LibraryAdminComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ LibraryAdminComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
