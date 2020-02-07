import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumComponent } from './academics-curriculum.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';

describe('AcademicsCurriculumComponent', () => {
  let component: AcademicsCurriculumComponent;
  let fixture: ComponentFixture<AcademicsCurriculumComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule, AppDashboardLinksModule ],
      declarations: [ AcademicsCurriculumComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
