import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { EditProcurementRequestComponent } from './edit-procurement-request.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { ProcurementsRequestComponent } from '../procurements-request/procurements-request.component';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { InputComponent } from '../../../components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../../components/select/select.component';
import { ValidateSubmitButtonsComponent } from '../../../components/validate-submit-buttons/validate-submit-buttons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('EditProcurementRequestComponent', () => {
  let component: EditProcurementRequestComponent;
  let fixture: ComponentFixture<EditProcurementRequestComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        FormErrorsModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule
      ],
      declarations: [
        EditProcurementRequestComponent,
        ProcurementsRequestComponent,
        LoadingBubbleComponent,
        InputComponent,
        SelectComponent,
        ValidateSubmitButtonsComponent
      ],
      providers: [reducerProvider]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
