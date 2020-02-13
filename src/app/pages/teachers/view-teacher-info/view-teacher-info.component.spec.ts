import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherInfoComponent } from './view-teacher-info.component';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('ViewTeacherInfoComponent', () => {
  let component: ViewTeacherInfoComponent;
  let fixture: ComponentFixture<ViewTeacherInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      declarations: [ViewTeacherInfoComponent],
      providers: [
        reducerProvider,
        {
          provide: ActivatedRoute,
          useValue: { parent: { paramMap: of({ get: () => 1 }) } }
        },
        {
          provide: Store,
          useValue: { pipe: () => of({ 1: 1 })}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
