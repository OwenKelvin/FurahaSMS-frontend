import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookComponent } from './view-book.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('ViewBookComponent', () => {
  let component: ViewBookComponent;
  let fixture: ComponentFixture<ViewBookComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ViewBookComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
