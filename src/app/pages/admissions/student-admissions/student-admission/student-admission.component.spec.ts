import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentAdmissionComponent} from './student-admission.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLinksModule} from 'src/app/shared/links/links.module';
import {myProfileFeatureKey, reducer} from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';
import {appFeatureKey, reducers} from '../../../../store/reducers/app.reducer';

describe('StudentAdmissionComponent', () => {
  let component: StudentAdmissionComponent;
  let fixture: ComponentFixture<StudentAdmissionComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }), RouterTestingModule, AppLinksModule,
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        StoreModule.forFeature(appFeatureKey, reducers)
      ],
      declarations: [StudentAdmissionComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
