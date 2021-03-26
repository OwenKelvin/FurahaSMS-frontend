import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ProcurementTendersBidsComponent} from './procurement-tenders-bids.component';
import {Store, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ProcurementTendersBidsComponent', () => {
  let component: ProcurementTendersBidsComponent;
  let fixture: ComponentFixture<ProcurementTendersBidsComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ProcurementTendersBidsComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementTendersBidsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
