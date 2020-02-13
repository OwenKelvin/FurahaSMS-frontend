import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianComponent } from './view-guardian.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('ViewGuardianComponent', () => {
  let component: ViewGuardianComponent;
  let fixture: ComponentFixture<ViewGuardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppUserProfileModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })

      ],
      declarations: [ViewGuardianComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
