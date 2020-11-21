import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {LayoutComponent} from './layout.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appFeatureKey, reducers} from '../../store/reducers/app.reducer';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        AppLayoutModule
      ],
      declarations: [],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should have as function "closeFullScreenMode" that exits fullscreen mode', () => {
  //   const spyExitFullScreen = spyOn(document, 'exitFullscreen').and.callThrough();
  //   component.closeFullScreenMode();
  //   expect(spyExitFullScreen).toHaveBeenCalled();
  // });
});
