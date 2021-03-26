import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewProcurementTendersAwardedComponent} from './view-procurement-tenders-awarded.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewProcurementTendersAwardedComponent', () => {
  let component: ViewProcurementTendersAwardedComponent;
  let fixture: ComponentFixture<ViewProcurementTendersAwardedComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports:
        [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
          RouterTestingModule, HttpClientTestingModule, ModalModule.forRoot(),
          ReactiveComponentModule
        ],
      declarations: [ViewProcurementTendersAwardedComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ViewProcurementTendersAwardedComponent]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementTendersAwardedComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
