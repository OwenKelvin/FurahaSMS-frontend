import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCourseViewComponent } from './e-learning-course-view.component';
import { ELearningTopicMaterialsModule } from '../../e-learning-topic-materials/e-learning-topic-materials.module';
import { ELearningTopicObjectivesComponent } from '../../e-learning-topic-objectives/e-learning-topic-objectives.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('ELearningCourseViewComponent', () => {
  let component: ELearningCourseViewComponent;
  let fixture: ComponentFixture<ELearningCourseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ELearningTopicObjectivesComponent,
        ELearningTopicMaterialsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      declarations: [ELearningCourseViewComponent],
      providers: [
        reducerProvider,
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
