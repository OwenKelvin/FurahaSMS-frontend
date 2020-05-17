import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublisherComponent } from './edit-publisher.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { CreatePublisherComponent } from '../create-publisher/create-publisher.component';
import { EditorModule } from '@tinymce/tinymce-angular';

describe('EditPublisherComponent', () => {
  let component: EditPublisherComponent;
  let fixture: ComponentFixture<EditPublisherComponent>;
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
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppLoadingBubbleModule,
        EditorModule
       ],
      declarations: [EditPublisherComponent, CreatePublisherComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPublisherComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
