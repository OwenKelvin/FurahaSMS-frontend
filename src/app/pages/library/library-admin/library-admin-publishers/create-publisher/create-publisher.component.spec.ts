import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePublisherComponent } from './create-publisher.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditorModule } from '@tinymce/tinymce-angular';

describe('CreatePublisherComponent', () => {
  let component: CreatePublisherComponent;
  let fixture: ComponentFixture<CreatePublisherComponent>;
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
        AppInputModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        EditorModule
      ],
      declarations: [CreatePublisherComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

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
