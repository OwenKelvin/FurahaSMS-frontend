import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreateTimingTemplateComponent} from './create-timing-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, reducerProvider, metaReducers} from 'src/app/store/reducers';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateTimingTemplateComponent', () => {
  let component: CreateTimingTemplateComponent;
  let fixture: ComponentFixture<CreateTimingTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        AppInputModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppValidateSubmitButtonsModule,
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [CreateTimingTemplateComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
