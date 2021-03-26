import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreateProcurementsVendorsComponent} from './create-procurements-vendors.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {InputComponent} from '../../../components/input/input.component';
import {TelInputComponent} from '../../../components/tel-input/tel-input.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgSelectModule} from '@ng-select/ng-select';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateProcurementsVendorsComponent', () => {
  let component: CreateProcurementsVendorsComponent;
  let fixture: ComponentFixture<CreateProcurementsVendorsComponent>;
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
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TabsModule.forRoot(),
        NgSelectModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule
      ],
      declarations: [
        CreateProcurementsVendorsComponent,
        LoadingBubbleComponent,
        InputComponent,
        TelInputComponent,

      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    spyOn(document, 'querySelector').and.callThrough();
    fixture = TestBed.createComponent(CreateProcurementsVendorsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
