import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ViewGuardianStudentsComponent} from './view-guardian-students.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {StoreModule} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ViewGuardianStudentsComponent', () => {
  let component: ViewGuardianStudentsComponent;
  let fixture: ComponentFixture<ViewGuardianStudentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ReactiveComponentModule
      ],
      declarations: [ViewGuardianStudentsComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: {parent: {paramMap: of({get: () => 1})}}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
