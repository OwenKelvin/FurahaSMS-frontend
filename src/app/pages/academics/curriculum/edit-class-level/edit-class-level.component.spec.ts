import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditClassLevelComponent} from './edit-class-level.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppCrudModule} from '../../../../components/crud/app-crud.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('EditClassLevelComponent', () => {
  let component: EditClassLevelComponent;
  let fixture: ComponentFixture<EditClassLevelComponent>;
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
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppValidateSubmitButtonsModule,
        AppCrudModule,
        RouterTestingModule
      ],
      declarations: [EditClassLevelComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassLevelComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
