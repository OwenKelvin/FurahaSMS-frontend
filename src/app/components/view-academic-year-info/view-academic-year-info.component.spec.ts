import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearInfoComponent } from './view-academic-year-info.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { DashboardLinksComponent } from '../dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../dashboard-link/dashboard-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewAcademicYearInfoComponent', () => {
  let component: ViewAcademicYearInfoComponent;
  let fixture: ComponentFixture<ViewAcademicYearInfoComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ ViewAcademicYearInfoComponent, DashboardLinksComponent, DashboardLinkComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearInfoComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
