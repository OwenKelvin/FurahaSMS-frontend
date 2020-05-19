import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { myProfileFeatureKey, reducer } from 'src/app/pages/my-profile/store/reducers/my-profile.reducer';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
        AppLinksModule,
        StoreModule.forFeature(myProfileFeatureKey, reducer)
        ],
      declarations: [DashboardComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
