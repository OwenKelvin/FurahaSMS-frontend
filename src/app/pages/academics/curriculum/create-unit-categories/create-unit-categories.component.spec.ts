import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitCategoriesComponent } from './create-unit-categories.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUnitComponent } from '../create-unit/create-unit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { ErrorComponent } from 'src/app/components/error/error.component';

describe('CreateUnitCategoriesComponent', () => {
  let component: CreateUnitCategoriesComponent;
  let fixture: ComponentFixture<CreateUnitCategoriesComponent>;
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
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppInputModule
      ],
      declarations: [
        CreateUnitCategoriesComponent,
        CreateUnitComponent,
        ErrorComponent,
      ],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
