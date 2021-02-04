import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RolesPermissionsComponent} from './roles-permissions.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';

describe('RolesPermissionsComponent', () => {
  let component: RolesPermissionsComponent;
  let fixture: ComponentFixture<RolesPermissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppLoadingBubbleModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [RolesPermissionsComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
