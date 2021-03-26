import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditClassLevelCategoryComponent} from './edit-class-level-category.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {CreateClassLevelCategoryComponent} from '../create-class-level-category/create-class-level-category.component';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ReactiveComponentModule} from '@ngrx/component';

describe('EditClassLevelCategoryComponent', () => {
  let component: EditClassLevelCategoryComponent;
  let fixture: ComponentFixture<EditClassLevelCategoryComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        AppValidateSubmitButtonsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppInputModule,
        EditorModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [EditClassLevelCategoryComponent, CreateClassLevelCategoryComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassLevelCategoryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
