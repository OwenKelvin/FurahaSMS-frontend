import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementRequestComponent } from './view-procurement-request.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewProcurementRequestComponent', () => {
  let component: ViewProcurementRequestComponent;
  let fixture: ComponentFixture<ViewProcurementRequestComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule, RouterTestingModule ],
      declarations: [ ViewProcurementRequestComponent, LoadingBubbleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
