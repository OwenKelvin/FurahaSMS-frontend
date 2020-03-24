import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningEditCourseComponent } from './e-learning-edit-course.component';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ELearningTopicObjectivesModule } from '../../e-learning-topic-objectives/e-learning-topic-objectives.module';
import { ELearningTopicMaterialsModule } from '../../e-learning-topic-materials/e-learning-topic-materials.module';

describe('ELearningEditCourseComponent', () => {
  let component: ELearningEditCourseComponent;
  let fixture: ComponentFixture<ELearningEditCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        AppLoadingBubbleModule,
        RouterTestingModule,
        FormsModule,
        ELearningTopicObjectivesModule,
        ELearningTopicMaterialsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      declarations: [ELearningEditCourseComponent],
      providers: [reducerProvider]
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
