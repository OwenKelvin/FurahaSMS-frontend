import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardLinksComponent } from './dashboard-links.component';
import { DashboardLinkComponent } from './../dashboard-link/dashboard-link.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from './../../store/reducers';

describe('DashboardLinksComponent', () => {
  let component: DashboardLinksComponent;
  let fixture: ComponentFixture<DashboardLinksComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ DashboardLinksComponent, DashboardLinkComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLinksComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});