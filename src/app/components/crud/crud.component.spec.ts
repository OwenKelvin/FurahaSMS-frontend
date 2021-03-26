import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './crud.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { ErrorComponent } from '../error/error.component';
import { AppValidateSubmitButtonsModule } from '../validate-submit-buttons/validate-submit-buttons.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;
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
        FormsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppValidateSubmitButtonsModule,
        AppLoadingBubbleModule
      ],
      declarations: [CrudComponent, InputComponent, SelectComponent, ErrorComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call itemService submit function', () => {
    Object.assign(component, { ...component, itemService: {}});
    Object.assign(component.itemService, {submit: true});
    const itemService = spyOn(component.itemService, 'submit').and.returnValue({ subscribe: () => true});
    spyOnProperty(component.itemForm, 'valid').and.returnValue(true);
    component.submitForm();
    expect(itemService).toHaveBeenCalled();
  });
});
