import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementTendersBidsComponent } from './procurement-tenders-bids.component';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppState } from 'src/app/store/reducers';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';

describe('ProcurementTendersBidsComponent', () => {
  let component: ProcurementTendersBidsComponent;
  let fixture: ComponentFixture<ProcurementTendersBidsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule, HttpClientTestingModule ],
      declarations: [ ProcurementTendersBidsComponent, LoadingBubbleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementTendersBidsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
