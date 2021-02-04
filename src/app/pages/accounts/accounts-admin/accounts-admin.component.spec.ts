import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {AccountsAdminComponent} from './accounts-admin.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {myProfileFeatureKey, reducer} from '../../my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../../store/reducers/app.reducer';

describe('AccountsAdminComponent', () => {
  let component: AccountsAdminComponent;
  let fixture: ComponentFixture<AccountsAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppLinksModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers)
      ],
      declarations: [AccountsAdminComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
