import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcurementsRequestComponent} from './procurements-request.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectComponent} from '../../../components/select/select.component';
import {InputComponent} from '../../../components/input/input.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {ValidateSubmitButtonsComponent} from '../../../components/validate-submit-buttons/validate-submit-buttons.component';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';

describe('ProcurementsRequestComponent', () => {
  let component: ProcurementsRequestComponent;
  let fixture: ComponentFixture<ProcurementsRequestComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        FormErrorsModule,
        FormsModule,
        ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [
        ProcurementsRequestComponent,
        SelectComponent,
        InputComponent,
        LoadingBubbleComponent,
        ValidateSubmitButtonsComponent,

      ],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementsRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
