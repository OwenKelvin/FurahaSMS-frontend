import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MyProfileComponent} from './my-profile.component';
import {AppUserProfileModule} from 'src/app/components/user-profile/user-profile.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {myProfileFeatureKey, reducer} from './store/reducers/my-profile.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppUserProfileModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        ReactiveComponentModule
      ],
      declarations: [MyProfileComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
