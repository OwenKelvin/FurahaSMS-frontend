import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearComponent } from './view-academic-year.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { DashboardLinksComponent } from '../dashboard-links/dashboard-links.component';
import { DashboardLinkComponent } from '../dashboard-link/dashboard-link.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('ViewAcademicYearComponent', () => {
  let component: ViewAcademicYearComponent;
  let fixture: ComponentFixture<ViewAcademicYearComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule, HttpClientTestingModule ],
      declarations: [
        ViewAcademicYearComponent,
        LoadingBubbleComponent,
        DashboardLinksComponent,
        DashboardLinkComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            routerState: {
              root: {
                children: [
                  {
                    children: [{
                      children: [{
                        params: {
                          subscribe: () => ({id: 3})
                        }
                      }]
                    }]
                  }
                ]
              }
            }
          } 
        }
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
