import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ELearningTopicMaterialsComponent } from './e-learning-topic-materials.component';
import { RouterTestingModule } from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {academicsFeatureKey, reducers} from '../../store/reducers';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('ELearningTopicMaterialsComponent', () => {
  let component: ELearningTopicMaterialsComponent;
  let fixture: ComponentFixture<ELearningTopicMaterialsComponent>;

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
        StoreModule.forFeature(academicsFeatureKey, reducers),
        ModalModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [ ELearningTopicMaterialsComponent ],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningTopicMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
