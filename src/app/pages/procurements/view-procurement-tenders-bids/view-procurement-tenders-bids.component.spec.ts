import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewProcurementTendersBidsComponent} from './view-procurement-tenders-bids.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {ProcurementItemComponent} from '../procurement-item/procurement-item.component';
import {ViewProcurementTenderBidsComponent} from '../view-procurement-tender-bids/view-procurement-tender-bids.component';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ModalModule} from 'ngx-bootstrap/modal';
import {of} from 'rxjs';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewProcurementTendersBidsComponent', () => {
  let component: ViewProcurementTendersBidsComponent;
  let fixture: ComponentFixture<ViewProcurementTendersBidsComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
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
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [ViewProcurementTendersBidsComponent, LoadingBubbleComponent,
        ProcurementItemComponent,
        ViewProcurementTenderBidsComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({get: () => 1})
          }
        }
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementTendersBidsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
