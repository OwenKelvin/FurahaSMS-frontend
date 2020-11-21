import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudyMaterialsComponent } from './study-materials.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { myProfileFeatureKey, reducer } from '../../my-profile/store/reducers/my-profile.reducer';

describe('StudyMaterialsComponent', () => {
  let component: StudyMaterialsComponent;
  let fixture: ComponentFixture<StudyMaterialsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppLinksModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(myProfileFeatureKey, reducer)
      ],
      declarations: [StudyMaterialsComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
