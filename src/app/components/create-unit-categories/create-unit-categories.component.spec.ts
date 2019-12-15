import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitCategoriesComponent } from './create-unit-categories.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('CreateUnitCategoriesComponent', () => {
  let component: CreateUnitCategoriesComponent;
  let fixture: ComponentFixture<CreateUnitCategoriesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CreateUnitCategoriesComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
