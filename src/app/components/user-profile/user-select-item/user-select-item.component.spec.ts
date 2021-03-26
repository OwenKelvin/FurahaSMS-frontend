import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserSelectItemComponent} from './user-select-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {appFeatureKey, reducers} from 'src/app/store/reducers/app.reducer';
import {ReactiveComponentModule} from '@ngrx/component';

describe('UserSelectItemComponent', () => {
  let component: UserSelectItemComponent;
  let fixture: ComponentFixture<UserSelectItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers),
        ReactiveComponentModule
      ],
      declarations: [UserSelectItemComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
