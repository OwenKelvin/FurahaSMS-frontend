import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PasswordChangeFormComponent} from './password-change-form.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('PasswordChangeFormComponent', () => {
  let component: PasswordChangeFormComponent;
  let fixture: ComponentFixture<PasswordChangeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AppInputModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ReactiveComponentModule
      ],
      providers: [reducerProvider],
      declarations: [PasswordChangeFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
