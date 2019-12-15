import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitCategoriesComponent } from './create-unit-categories.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { CreateUnitComponent } from '../create-unit/create-unit.component';
import { ErrorComponent } from '../error/error.component';
import { SelectComponent } from '../select/select.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateUnitCategoriesComponent', () => {
  let component: CreateUnitCategoriesComponent;
  let fixture: ComponentFixture<CreateUnitCategoriesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        CreateUnitCategoriesComponent,
        InputComponent,
        CreateUnitComponent,
        ErrorComponent,
        SelectComponent
      ]
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
