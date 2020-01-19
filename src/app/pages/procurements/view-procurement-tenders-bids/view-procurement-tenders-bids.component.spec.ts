import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementTendersBidsComponent } from './view-procurement-tenders-bids.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcurementItemComponent } from '../procurement-item/procurement-item.component';
import { ViewProcurementTenderBidsComponent } from '../view-procurement-tender-bids/view-procurement-tender-bids.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { of } from 'rxjs';

describe('ViewProcurementTendersBidsComponent', () => {
  let component: ViewProcurementTendersBidsComponent;
  let fixture: ComponentFixture<ViewProcurementTendersBidsComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot()
      ],
      declarations: [ViewProcurementTendersBidsComponent, LoadingBubbleComponent,
        ProcurementItemComponent,
        ViewProcurementTenderBidsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({get: (params) => 1 })
          }
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementTendersBidsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
