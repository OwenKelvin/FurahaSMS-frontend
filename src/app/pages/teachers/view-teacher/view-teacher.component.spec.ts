import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewTeacherComponent} from './view-teacher.component';
import {StoreModule} from '@ngrx/store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {AppUserProfileModule} from 'src/app/components/user-profile/user-profile.module';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {teacherProfileFeatureKey, reducer} from '../store/reducers/teacher-profile.reducer';
import {appFeatureKey, reducers} from '../../../store/reducers/app.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewTeacherComponent', () => {
  let component: ViewTeacherComponent;
  let fixture: ComponentFixture<ViewTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        AppUserProfileModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(teacherProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers),
        ReactiveComponentModule
      ],
      declarations: [ViewTeacherComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
