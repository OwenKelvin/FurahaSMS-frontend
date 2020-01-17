import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementsApprovedRequestsComponent } from './view-procurements-approved-requests.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LoadingBubbleComponent } from '../../loading-bubble/loading-bubble.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewProcurementsApprovedRequestsComponent', () => {
  let component: ViewProcurementsApprovedRequestsComponent;
  let fixture: ComponentFixture<ViewProcurementsApprovedRequestsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule, AccordionModule.forRoot(), RouterTestingModule ],
      declarations: [ ViewProcurementsApprovedRequestsComponent, LoadingBubbleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementsApprovedRequestsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
