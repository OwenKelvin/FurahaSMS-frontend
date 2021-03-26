import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AcademicsCurriculumClassLevelsComponent} from './academics-curriculum-class-levels.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {ViewItemsComponent} from '../../../../components/view-items/view-items.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ChipsComponent} from '../../../../components/chips/chips.component';
import {LoadingBubbleComponent} from '../../../../components/loading-bubble/loading-bubble.component';
import {ErrorComponent} from '../../../../components/error/error.component';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AcademicsCurriculumClassLevelsComponent', () => {
  let component: AcademicsCurriculumClassLevelsComponent;
  let fixture: ComponentFixture<AcademicsCurriculumClassLevelsComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveComponentModule
      ],
      declarations: [
        AcademicsCurriculumClassLevelsComponent,
        ViewItemsComponent,
        ChipsComponent,
        LoadingBubbleComponent,
        AcademicsCurriculumClassLevelsComponent,
        ErrorComponent
      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumClassLevelsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
