import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AcademicsCurriculumClassLevelCategoriesComponent} from './academics-curriculum-class-level-categories.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {ViewItemsComponent} from '../../../../components/view-items/view-items.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ChipsComponent} from '../../../../components/chips/chips.component';
import {LoadingBubbleComponent} from '../../../../components/loading-bubble/loading-bubble.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ErrorComponent} from '../../../../components/error/error.component';
import {ReactiveComponentModule} from '@ngrx/component';

describe('AcademicsCurriculumClassLevelCategoriesComponent', () => {
  let component: AcademicsCurriculumClassLevelCategoriesComponent;
  let fixture: ComponentFixture<AcademicsCurriculumClassLevelCategoriesComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }), RouterTestingModule, HttpClientTestingModule,
        ReactiveComponentModule
      ],
      declarations: [
        AcademicsCurriculumClassLevelCategoriesComponent,
        ViewItemsComponent,
        ChipsComponent,
        LoadingBubbleComponent,
        ErrorComponent
      ],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumClassLevelCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
