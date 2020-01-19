import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearComponent } from './academic-year.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';

describe('AcademicYearComponent', () => {
  let component: AcademicYearComponent;
  let fixture: ComponentFixture<AcademicYearComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule, AppDashboardLinksModule ],
      declarations: [ AcademicYearComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
