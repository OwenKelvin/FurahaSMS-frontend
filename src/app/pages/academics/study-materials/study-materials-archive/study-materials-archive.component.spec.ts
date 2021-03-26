import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {StudyMaterialsArchiveComponent} from './study-materials-archive.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {appFeatureKey, reducers} from '../../../../store/reducers/app.reducer';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {myProfileFeatureKey, reducer} from '../../../my-profile/store/reducers/my-profile.reducer';
import {AppStarLabelRequiredModule} from '../../../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('StudyMaterialsArchiveComponent', () => {
  let component: StudyMaterialsArchiveComponent;
  let fixture: ComponentFixture<StudyMaterialsArchiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        StoreModule.forFeature(myProfileFeatureKey, reducer),
        AppStarLabelRequiredModule,
        ReactiveComponentModule
      ],
      declarations: [ StudyMaterialsArchiveComponent ],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
