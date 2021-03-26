import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderCollapseComponent } from './header-collapse.component';
import { MenuSearchComponent } from '../menu-search/menu-search.component';
import { UserButtonComponent } from '../user-button/user-button.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {myProfileFeatureKey, reducer} from '../../../pages/my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../../store/reducers/app.reducer';
import {LogoutButtonComponent} from '../logout-button/logout-button.component';
import {ReactiveComponentModule} from '@ngrx/component';

describe('HeaderCollapseComponent', () => {
  let component: HeaderCollapseComponent;
  let fixture: ComponentFixture<HeaderCollapseComponent>;

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
        StoreModule.forFeature(appFeatureKey, reducers),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ReactiveComponentModule
      ],
      declarations: [
        HeaderCollapseComponent,
        MenuSearchComponent,
        UserButtonComponent,
        LogoutButtonComponent
      ],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
