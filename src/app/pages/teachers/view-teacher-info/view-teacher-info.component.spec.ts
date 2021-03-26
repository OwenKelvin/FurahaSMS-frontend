import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewTeacherInfoComponent} from './view-teacher-info.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule, Store} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AppUserProfileModule} from 'src/app/components/user-profile/user-profile.module';
import {ReactiveComponentModule} from '@ngrx/component';
import {MathModule} from '../../../shared/math/math.module';

describe('ViewTeacherInfoComponent', () => {
  let component: ViewTeacherInfoComponent;
  let fixture: ComponentFixture<ViewTeacherInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppUserProfileModule,
        ReactiveComponentModule,
        MathModule
      ],
      declarations: [ViewTeacherInfoComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {parent: {paramMap: of({get: () => 1})}}
        },
        {
          provide: Store,
          useValue: {
            pipe: () => of({1: 1}),
            dispatch: () => ({})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
