import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementTendersBidsComponent } from './view-procurement-tenders-bids.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ViewProcurementTendersBidsComponent', () => {
  let component: ViewProcurementTendersBidsComponent;
  let fixture: ComponentFixture<ViewProcurementTendersBidsComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule, RouterTestingModule],
      declarations: [ViewProcurementTendersBidsComponent, LoadingBubbleComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            routerState: {
              snapshot: {
                root: {
                  firstChild: {
                    firstChild: {
                      firstChild: {
                        params: { id: 1 }
                      }
                    }
                  }
                }
              }
            }
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
