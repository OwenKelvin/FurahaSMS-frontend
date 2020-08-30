import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LibraryMyAccountComponent} from './library-my-account.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {AppValidateSubmitButtonsModule} from '../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LibraryMyAccountComponent', () => {
  let component: LibraryMyAccountComponent;
  let fixture: ComponentFixture<LibraryMyAccountComponent>;
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
        AppValidateSubmitButtonsModule,
        HttpClientTestingModule
      ],
      declarations: [LibraryMyAccountComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMyAccountComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
