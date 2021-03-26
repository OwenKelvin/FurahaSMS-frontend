import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateUnitComponent} from './create-unit.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {ErrorComponent} from 'src/app/components/error/error.component';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateUnitComponent', () => {
  let component: CreateUnitComponent;
  let fixture: ComponentFixture<CreateUnitComponent>;
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
        RouterTestingModule,
        HttpClientTestingModule,
        AppInputModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [
        CreateUnitComponent,
        ErrorComponent
      ],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
