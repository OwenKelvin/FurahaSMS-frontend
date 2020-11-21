import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MySchedulesComponent} from './my-schedules.component';
import {StoreModule} from '@ngrx/store';
import {appFeatureKey, reducers} from '../../../store/reducers/app.reducer';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../store/reducers';

describe('MySchedulesComponent', () => {
  let component: MySchedulesComponent;
  let fixture: ComponentFixture<MySchedulesComponent>;

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
        StoreModule.forFeature(appFeatureKey, reducers),
      ],
      declarations: [MySchedulesComponent],
      providers : [
        reducerProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
