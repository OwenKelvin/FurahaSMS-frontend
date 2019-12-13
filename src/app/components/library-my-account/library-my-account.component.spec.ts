import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMyAccountComponent } from './library-my-account.component';
import { Store, StoreModule } from '@ngrx/store';

describe('LibraryMyAccountComponent', () => {
  let component: LibraryMyAccountComponent;
  let fixture: ComponentFixture<LibraryMyAccountComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ LibraryMyAccountComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMyAccountComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
