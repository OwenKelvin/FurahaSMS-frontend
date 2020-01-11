import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcurementsRequestComponent } from './my-procurements-request.component';
import { Store, StoreModule } from '@ngrx/store';

describe('MyProcurementsRequestComponent', () => {
  let component: MyProcurementsRequestComponent;
  let fixture: ComponentFixture<MyProcurementsRequestComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ MyProcurementsRequestComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcurementsRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
