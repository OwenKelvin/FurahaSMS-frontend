import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserButtonComponent} from './user-button.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {myProfileFeatureKey, reducer} from '../../../pages/my-profile/store/reducers/my-profile.reducer';
import {LogoutButtonComponent} from '../logout-button/logout-button.component';
import {ReactiveComponentModule} from '@ngrx/component';

describe('UserButtonComponent', () => {
  let component: UserButtonComponent;
  let fixture: ComponentFixture<UserButtonComponent>;
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
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveComponentModule
      ],
      declarations: [UserButtonComponent, LogoutButtonComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserButtonComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
