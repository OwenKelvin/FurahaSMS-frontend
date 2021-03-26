import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewStudentInfoComponent} from './view-student-info.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppUserProfileModule} from 'src/app/components/user-profile/user-profile.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {appFeatureKey, reducers} from '../../../store/reducers/app.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewStudentInfoComponent', () => {
  let component: ViewStudentInfoComponent;
  let fixture: ComponentFixture<ViewStudentInfoComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        AppUserProfileModule,
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ViewStudentInfoComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentInfoComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
