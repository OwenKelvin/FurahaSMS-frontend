import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewPublisherComponent} from './view-publisher.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewPublisherComponent', () => {
  let component: ViewPublisherComponent;
  let fixture: ComponentFixture<ViewPublisherComponent>;
  let store: Store<AppState>;

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
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ViewPublisherComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPublisherComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
