import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddBookComponent} from './add-book.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {SelectLibraryClassComponent} from '../../../components/select-library-class/select-library-class.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AppBarcodeModule} from 'src/app/shared/barcode/barcode.module';
import {myProfileFeatureKey, reducer} from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {AppStarLabelRequiredModule} from '../../../../../components/label-star-required/app-star-label-required';
import {NgSelectModule} from '@ng-select/ng-select';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        NgSelectModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        RouterTestingModule,
        AppLinksModule,
        AppLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        TabsModule.forRoot(),
        AppBarcodeModule,
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        AppValidateSubmitButtonsModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule
      ],
      declarations: [AddBookComponent, SelectLibraryClassComponent],
      providers: [
        reducerProvider,
        {
          provide: Store,
          useValue: {
            dispatch: () => {
            },
            pipe: () => of([])
          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
