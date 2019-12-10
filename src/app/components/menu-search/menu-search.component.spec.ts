import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSearchComponent } from './menu-search.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from './../../store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuSearchComponent', () => {
  let component: MenuSearchComponent;
  let fixture: ComponentFixture<MenuSearchComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), ReactiveFormsModule, FormsModule, RouterTestingModule ],
      declarations: [ MenuSearchComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSearchComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
