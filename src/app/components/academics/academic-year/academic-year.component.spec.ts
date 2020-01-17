import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearComponent } from './academic-year.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { DashboardLinksComponent } from '../../dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../../dashboard-link/dashboard-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AcademicYearComponent', () => {
  let component: AcademicYearComponent;
  let fixture: ComponentFixture<AcademicYearComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ AcademicYearComponent, DashboardLinksComponent, DashboardLinkComponent ]
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
