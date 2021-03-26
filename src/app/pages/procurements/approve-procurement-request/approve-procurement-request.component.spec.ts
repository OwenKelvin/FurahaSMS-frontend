import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ApproveProcurementRequestComponent} from './approve-procurement-request.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ApproveProcurementRequestComponent', () => {
  let component: ApproveProcurementRequestComponent;
  let fixture: ComponentFixture<ApproveProcurementRequestComponent>;
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
        AccordionModule.forRoot(),
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ApproveProcurementRequestComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
