import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementTenderBidsComponent } from './view-procurement-tender-bids.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

describe('ViewProcurementTenderBidsComponent', () => {
  let component: ViewProcurementTenderBidsComponent;
  let fixture: ComponentFixture<ViewProcurementTenderBidsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule, AccordionModule.forRoot() ],
      declarations: [ ViewProcurementTenderBidsComponent, LoadingBubbleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementTenderBidsComponent);
    component = fixture.componentInstance;
    component.items = [];
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
