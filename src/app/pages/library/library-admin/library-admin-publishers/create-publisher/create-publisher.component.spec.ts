import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CreatePublisherComponent} from './create-publisher.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AppValidateSubmitButtonsModule} from 'src/app/components/validate-submit-buttons/validate-submit-buttons.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {libraryFeatureKey, reducers} from '../../../store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('CreatePublisherComponent', () => {
  let component: CreatePublisherComponent;
  let fixture: ComponentFixture<CreatePublisherComponent>;
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
        StoreModule.forFeature(libraryFeatureKey, reducers),
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        EditorModule,
        AppValidateSubmitButtonsModule,
        ReactiveComponentModule
      ],
      declarations: [CreatePublisherComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {
            parent: {
              paramMap: of({get: () => 1})
            }
          }
        }
      ]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePublisherComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
