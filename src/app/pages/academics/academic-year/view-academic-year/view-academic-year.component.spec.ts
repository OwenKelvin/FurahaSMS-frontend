import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearComponent } from './view-academic-year.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('ViewAcademicYearComponent', () => {
  let component: ViewAcademicYearComponent;
  let fixture: ComponentFixture<ViewAcademicYearComponent>;
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
        RouterTestingModule,
        HttpClientTestingModule,
        AppDashboardLinksModule,
        AppLoadingBubbleModule
      ],
      declarations: [
        ViewAcademicYearComponent],
      providers: [
        reducerProvider,
        {
          provide: Router,
          useValue: {
            routerState: {
              root: {
                firstChild: {
                  firstChild: {
                    firstChild: {
                      params: {
                        subscribe: () => ({ id: 3 })
                      },
                      firstChild: {
                        children: [],

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
    fixture = TestBed.createComponent(ViewAcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
