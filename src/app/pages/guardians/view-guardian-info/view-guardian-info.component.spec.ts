import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewGuardianInfoComponent} from './view-guardian-info.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {AppStarLabelRequiredModule} from '../../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewGuardianInfoComponent', () => {
  let component: ViewGuardianInfoComponent;
  let fixture: ComponentFixture<ViewGuardianInfoComponent>;

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
        AppStarLabelRequiredModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [ViewGuardianInfoComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {parent: {paramMap: of({get: () => 1})}}
        },
        {
          provide: Store,
          useValue: {pipe: () => of([{id: 1}])}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
