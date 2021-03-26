import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ELearningCourseViewComponent } from './e-learning-course-view.component';
import { ELearningTopicMaterialsModule } from '../../e-learning-topic-materials/e-learning-topic-materials.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { ELearningTopicObjectivesModule } from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import {myProfileFeatureKey, reducer as profileReducer} from '../../../../my-profile/store/reducers/my-profile.reducer';
import {academicsFeatureKey, reducers} from '../../../store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ELearningCourseViewComponent', () => {
  let component: ELearningCourseViewComponent;
  let fixture: ComponentFixture<ELearningCourseViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ELearningTopicObjectivesModule,
        ELearningTopicMaterialsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicsFeatureKey, reducers),
        StoreModule.forFeature(myProfileFeatureKey, profileReducer),
        RouterTestingModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [ELearningCourseViewComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({
                get: () => 0
              })
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
