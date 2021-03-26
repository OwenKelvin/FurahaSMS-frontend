import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EditUnitCategoryComponent} from './edit-unit-category.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {CreateUnitCategoriesComponent} from '../create-unit-categories/create-unit-categories.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ErrorModule} from '../../../../components/error/error.module';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {CreateUnitComponent} from '../create-unit/create-unit.component';
import {ReactiveComponentModule} from '@ngrx/component';

describe('EditUnitCategoryComponent', () => {
  let component: EditUnitCategoryComponent;
  let fixture: ComponentFixture<EditUnitCategoryComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }),
        AppValidateSubmitButtonsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppInputModule,
        EditorModule,
        ErrorModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [
        CreateUnitComponent,
        EditUnitCategoryComponent, CreateUnitCategoriesComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnitCategoryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
