import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileInfoComponent } from './my-profile-info.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('MyProfileInfoComponent', () => {
  let component: MyProfileInfoComponent;
  let fixture: ComponentFixture<MyProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [MyProfileInfoComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
