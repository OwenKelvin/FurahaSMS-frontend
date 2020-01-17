import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementTendersAwardedComponent } from './view-procurement-tenders-awarded.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';

describe('ViewProcurementTendersAwardedComponent', () => {
  let component: ViewProcurementTendersAwardedComponent;
  let fixture: ComponentFixture<ViewProcurementTendersAwardedComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule, HttpClientTestingModule],
      declarations: [ ViewProcurementTendersAwardedComponent, LoadingBubbleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementTendersAwardedComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
