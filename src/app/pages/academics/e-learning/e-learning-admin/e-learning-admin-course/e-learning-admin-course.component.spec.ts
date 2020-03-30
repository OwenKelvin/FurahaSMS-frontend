import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningAdminCourseComponent } from './e-learning-admin-course.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { EffectsModule } from '@ngrx/effects';

describe('ELearningAdminCourseComponent', () => {
  let component: ELearningAdminCourseComponent;
  let fixture: ComponentFixture<ELearningAdminCourseComponent>;

  beforeEach(async(() => {
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
        EffectsModule.forRoot([])
      ],
      declarations: [ELearningAdminCourseComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningAdminCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
