import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProcurementRequestComponent } from './approve-procurement-request.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ApproveProcurementRequestComponent', () => {
  let component: ApproveProcurementRequestComponent;
  let fixture: ComponentFixture<ApproveProcurementRequestComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ApproveProcurementRequestComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
