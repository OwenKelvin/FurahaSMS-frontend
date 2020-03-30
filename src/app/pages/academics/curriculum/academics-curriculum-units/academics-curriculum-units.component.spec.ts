import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumUnitsComponent } from './academics-curriculum-units.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { ViewItemsComponent } from '../../../../components/view-items/view-items.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../../../../components/chips/chips.component';
import { LoadingBubbleComponent } from '../../../../components/loading-bubble/loading-bubble.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorComponent } from '../../../../components/error/error.component';

describe('AcademicsCurriculumUnitsComponent', () => {
  let component: AcademicsCurriculumUnitsComponent;
  let fixture: ComponentFixture<AcademicsCurriculumUnitsComponent>;
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
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AcademicsCurriculumUnitsComponent,
        ViewItemsComponent,
        LoadingBubbleComponent,
        ChipsComponent,
        ErrorComponent
      ],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumUnitsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
