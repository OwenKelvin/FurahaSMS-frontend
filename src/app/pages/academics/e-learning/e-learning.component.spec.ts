import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ELearningComponent } from './e-learning.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { myProfileFeatureKey, reducer } from '../../my-profile/store/reducers/my-profile.reducer';

describe('ELearningComponent', () => {
  let component: ELearningComponent;
  let fixture: ComponentFixture<ELearningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule,
        StoreModule.forFeature(myProfileFeatureKey, reducer)
      ],
      declarations: [ELearningComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
