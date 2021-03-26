import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ELearningEditCourseComponent} from './e-learning-edit-course.component';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ELearningTopicObjectivesModule} from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import {ELearningTopicMaterialsModule} from '../../e-learning-topic-materials/e-learning-topic-materials.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {academicsFeatureKey, reducers} from '../../../store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ELearningEditCourseComponent', () => {
  let component: ELearningEditCourseComponent;
  let fixture: ComponentFixture<ELearningEditCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        AppLoadingBubbleModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        ELearningTopicObjectivesModule,
        ELearningTopicMaterialsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicsFeatureKey, reducers),
        ReactiveComponentModule
      ],
      declarations: [ELearningEditCourseComponent],
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
    fixture = TestBed.createComponent(ELearningEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
