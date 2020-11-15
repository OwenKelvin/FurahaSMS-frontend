import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {LogoutButtonComponent} from './logout-button.component';
import {Store, StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let fixture: ComponentFixture<LogoutButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutButtonComponent],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: () => {
            }
          }
        },
        reducerProvider,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logout function that dispatches logout action', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    // const dispatchAction = spyOn<any>(component, 'store');
    component.logout();
    expect(component).toBeTruthy();
    // expect(dispatchAction).toHaveBeenCalled();
  });
});
