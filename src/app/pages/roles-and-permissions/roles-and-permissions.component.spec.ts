import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {RolesAndPermissionsComponent} from './roles-and-permissions.component';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {myProfileFeatureKey, reducer} from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../store/reducers/app.reducer';

describe('RolesAndPermissionsComponent', () => {
  let component: RolesAndPermissionsComponent;
  let fixture: ComponentFixture<RolesAndPermissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers),
      ],
      declarations: [RolesAndPermissionsComponent],
      providers: [reducerProvider],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesAndPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
