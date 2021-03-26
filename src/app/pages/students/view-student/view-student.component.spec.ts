import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewStudentComponent} from './view-student.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {AppUserProfileModule} from 'src/app/components/user-profile/user-profile.module';
import {reducer} from '../store/reducers/student-profile.reducer';
import {reducers} from '../../../store/reducers/app.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AppUserProfileModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forFeature('studentProfiles', reducer),
        StoreModule.forFeature('app', reducers),
        ReactiveComponentModule
      ],
      declarations: [ViewStudentComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
