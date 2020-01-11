import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcurementRequestComponent } from './view-procurement-request.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ViewProcurementRequestComponent', () => {
  let component: ViewProcurementRequestComponent;
  let fixture: ComponentFixture<ViewProcurementRequestComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ViewProcurementRequestComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
