import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ToastComponent} from './toast.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        ReactiveComponentModule
      ],
      declarations: [ToastComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
