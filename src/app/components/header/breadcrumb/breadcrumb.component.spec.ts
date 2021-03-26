import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BreadcrumbComponent} from './breadcrumb.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {PRIMARY_OUTLET, Router} from '@angular/router';
import {of} from 'rxjs';
import {ReactiveComponentModule} from '@ngrx/component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let store: Store<AppState>;

  const mockRouter = {
    events: of(true),
    createUrlTree: () => {
    },
    serializeUrl: () => 'home',
    routerState: {
      root: {
        children: [
          {
            snapshot: {
              url: [{segment: 'home'}],
              data: {
                breadcrumb: 'Home'
              }
            },
            outlet: PRIMARY_OUTLET,
            children: []
          }
        ]
      }
    }
  };

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
        ReactiveComponentModule
      ],
      declarations: [BreadcrumbComponent, BreadcrumbComponent],
      providers: [
        reducerProvider,
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
