import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillOrRejectTenderFormComponent } from './fulfill-or-reject-tender-form.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../components/input/input.component';
import { ErrorComponent } from '../../../components/error/error.component';
import { ValidateSubmitButtonsComponent } from '../../../components/validate-submit-buttons/validate-submit-buttons.component';

describe('FulfillOrRejectTenderFormComponent', () => {
  let component: FulfillOrRejectTenderFormComponent;
  let fixture: ComponentFixture<FulfillOrRejectTenderFormComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }), HttpClientTestingModule, RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        FulfillOrRejectTenderFormComponent,
        InputComponent,
        ValidateSubmitButtonsComponent,
        ErrorComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillOrRejectTenderFormComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
