import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreateClassLevelComponent} from './create-class-level.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {CrudComponent} from '../../../../components/crud/crud.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ErrorComponent} from '../../../../components/error/error.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from '../../../../components/input/input.component';
import {SelectComponent} from '../../../../components/select/select.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {AppStarLabelRequiredModule} from '../../../../components/label-star-required/app-star-label-required';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateClassLevelComponent', () => {
  let component: CreateClassLevelComponent;
  let fixture: ComponentFixture<CreateClassLevelComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        EditorModule,
        AppValidateSubmitButtonsModule,
        AppLoadingBubbleModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule
      ],
      declarations: [
        CreateClassLevelComponent,
        CrudComponent,
        ErrorComponent,
        InputComponent,
        SelectComponent
      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
