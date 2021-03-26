import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StudentsRecentlyCreatedComponent} from './students-recently-created.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {ReactiveComponentModule} from '@ngrx/component';

describe('StudentRecentlyCreatedComponent', () => {
  let component: StudentsRecentlyCreatedComponent;
  let fixture: ComponentFixture<StudentsRecentlyCreatedComponent>;
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
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [StudentsRecentlyCreatedComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRecentlyCreatedComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
