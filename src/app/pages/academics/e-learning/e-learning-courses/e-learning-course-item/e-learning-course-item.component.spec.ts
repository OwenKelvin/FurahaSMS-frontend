import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ELearningCourseItemComponent} from './e-learning-course-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ELearningCourseItemComponent', () => {
  let component: ELearningCourseItemComponent;
  let fixture: ComponentFixture<ELearningCourseItemComponent>;

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
        ReactiveComponentModule
      ],
      declarations: [ELearningCourseItemComponent],
      providers: [
        reducerProvider,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
