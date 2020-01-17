import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcurementTenderBidComponent } from './create-procurement-tender-bid.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InputComponent } from '../../input/input.component';
import { SelectComponent } from '../../select/select.component';

describe('CreateProcurementTenderBidComponent', () => {
  let component: CreateProcurementTenderBidComponent;
  let fixture: ComponentFixture<CreateProcurementTenderBidComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [ CreateProcurementTenderBidComponent, InputComponent, SelectComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcurementTenderBidComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
