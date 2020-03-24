import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCourseViewComponent } from './e-learning-course-view.component';
import { ELearningTopicMaterialsModule } from '../../e-learning-topic-materials/e-learning-topic-materials.module';
import { ELearningTopicObjectivesComponent } from '../../e-learning-topic-objectives/e-learning-topic-objectives.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { ELearningTopicObjectivesModule } from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('ELearningCourseViewComponent', () => {
  let component: ELearningCourseViewComponent;
  let fixture: ComponentFixture<ELearningCourseViewComponent>;

  beforeEach(async(() => {
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
        RouterTestingModule,
        AppLoadingBubbleModule
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
