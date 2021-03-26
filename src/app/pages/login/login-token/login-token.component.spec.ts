import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {LoginTokenComponent} from './login-token.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorModule} from 'src/app/components/error/error.module';
import {AppLayoutModule} from 'src/app/modules/app-layout.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveComponentModule} from '@ngrx/component';

describe('LoginTokenComponent', () => {
  let component: LoginTokenComponent;
  let fixture: ComponentFixture<LoginTokenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppLayoutModule,
        ErrorModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        EffectsModule.forRoot([]),
        ReactiveComponentModule
      ],
      providers: [reducerProvider],
      declarations: [LoginTokenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
