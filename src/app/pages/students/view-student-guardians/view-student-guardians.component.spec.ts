import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewStudentGuardiansComponent} from './view-student-guardians.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewStudentGuardiansComponent', () => {
  let component: ViewStudentGuardiansComponent;
  let fixture: ComponentFixture<ViewStudentGuardiansComponent>;
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
        RouterTestingModule, HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ViewStudentGuardiansComponent, LoadingBubbleComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentGuardiansComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
