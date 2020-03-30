import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumComponent } from './academics-curriculum.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';

describe('AcademicsCurriculumComponent', () => {
  let component: AcademicsCurriculumComponent;
  let fixture: ComponentFixture<AcademicsCurriculumComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }), RouterTestingModule, AppDashboardLinksModule ],
      declarations: [AcademicsCurriculumComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
