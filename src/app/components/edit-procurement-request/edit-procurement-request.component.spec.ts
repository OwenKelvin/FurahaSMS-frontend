import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcurementRequestComponent } from './edit-procurement-request.component';
import { Store, StoreModule } from '@ngrx/store';

describe('EditProcurementRequestComponent', () => {
  let component: EditProcurementRequestComponent;
  let fixture: ComponentFixture<EditProcurementRequestComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ EditProcurementRequestComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
