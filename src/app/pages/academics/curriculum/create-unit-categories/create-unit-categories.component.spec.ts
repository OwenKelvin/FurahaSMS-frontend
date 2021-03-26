import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateUnitCategoriesComponent} from './create-unit-categories.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateUnitComponent} from '../create-unit/create-unit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {ErrorComponent} from 'src/app/components/error/error.component';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ErrorModule} from '../../../../components/error/error.module';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreateUnitCategoriesComponent', () => {
  let component: CreateUnitCategoriesComponent;
  let fixture: ComponentFixture<CreateUnitCategoriesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppInputModule,
        AppValidateSubmitButtonsModule,
        EditorModule,
        AppLoadingBubbleModule,
        ErrorModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [
        CreateUnitCategoriesComponent,
        CreateUnitComponent,
        ErrorComponent,
      ],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
