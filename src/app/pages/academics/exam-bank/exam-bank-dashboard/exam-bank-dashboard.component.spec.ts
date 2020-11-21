import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {ExamBankDashboardComponent} from './exam-bank-dashboard.component';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {myProfileFeatureKey, reducer} from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../../../store/reducers/app.reducer';

describe('ExamBankDashboardComponent', () => {
  let component: ExamBankDashboardComponent;
  let fixture: ComponentFixture<ExamBankDashboardComponent>;

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
      declarations: [ExamBankDashboardComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBankDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
