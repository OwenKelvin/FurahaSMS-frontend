import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SelectComponent} from './select.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }), FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [SelectComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
