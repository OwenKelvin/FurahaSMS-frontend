import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreateAuthorComponent} from './create-author.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateAuthorComponent', () => {
  let component: CreateAuthorComponent;
  let fixture: ComponentFixture<CreateAuthorComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        EditorModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [CreateAuthorComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
