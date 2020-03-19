import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementTenderBidsComponent } from './view-procurement-tender-bids.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

describe('ViewProcurementTenderBidsComponent', () => {
  let component: ViewProcurementTenderBidsComponent;
  let fixture: ComponentFixture<ViewProcurementTenderBidsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }), HttpClientTestingModule, AccordionModule.forRoot() ],
      declarations: [ViewProcurementTenderBidsComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementTenderBidsComponent);
    component = fixture.componentInstance;
    component.items = [];
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
