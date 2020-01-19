import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementsComponent } from './procurements.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { DashboardLinksComponent } from '../../components/dashboard/dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../../components/dashboard/dashboard-link/dashboard-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProcurementsComponent', () => {
  let component: ProcurementsComponent;
  let fixture: ComponentFixture<ProcurementsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ ProcurementsComponent, DashboardLinksComponent, DashboardLinkComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
