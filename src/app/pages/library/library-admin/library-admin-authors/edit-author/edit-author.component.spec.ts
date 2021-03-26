import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditAuthorComponent} from './edit-author.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CreateAuthorComponent} from '../create-author/create-author.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ReactiveComponentModule} from '@ngrx/component';

describe('EditAuthorComponent', () => {
  let component: EditAuthorComponent;
  let fixture: ComponentFixture<EditAuthorComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
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
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppLoadingBubbleModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [EditAuthorComponent, CreateAuthorComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuthorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
