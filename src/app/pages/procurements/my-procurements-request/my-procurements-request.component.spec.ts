import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyProcurementsRequestComponent} from './my-procurements-request.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {ViewItemsComponent} from '../../../components/view-items/view-items.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ErrorComponent} from '../../../components/error/error.component';
import {ChipsComponent} from '../../../components/chips/chips.component';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProcurementService} from 'src/app/services/procurement.service';
import {of} from 'rxjs';
import {ReactiveComponentModule} from '@ngrx/component';

describe('MyProcurementsRequestComponent', () => {
  let component: MyProcurementsRequestComponent;
  let fixture: ComponentFixture<MyProcurementsRequestComponent>;
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
        RouterTestingModule, HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [
        MyProcurementsRequestComponent,
        ViewItemsComponent,
        ErrorComponent,
        ChipsComponent,
        LoadingBubbleComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ProcurementService,
          useValue: {
            allMyRequest$: of([]),
            deleteProcurementRequest: of([])
          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcurementsRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
