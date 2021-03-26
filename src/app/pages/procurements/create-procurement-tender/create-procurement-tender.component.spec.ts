import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateProcurementTenderComponent} from './create-procurement-tender.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {ProcurementItemComponent} from '../procurement-item/procurement-item.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {InputComponent} from '../../../components/input/input.component';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateProcurementTenderComponent', () => {
  let component: CreateProcurementTenderComponent;
  let fixture: ComponentFixture<CreateProcurementTenderComponent>;
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
        RouterTestingModule,
        AppStarLabelRequiredModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveComponentModule
      ],
      declarations: [
        CreateProcurementTenderComponent,
        ProcurementItemComponent,
        LoadingBubbleComponent,
        InputComponent
      ],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcurementTenderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
