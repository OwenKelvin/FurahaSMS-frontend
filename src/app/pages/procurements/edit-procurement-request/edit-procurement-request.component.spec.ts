import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcurementRequestComponent } from './edit-procurement-request.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { ProcurementsRequestComponent } from '../procurements-request/procurements-request.component';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { InputComponent } from '../../../components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../../components/select/select.component';
import { ValidateSubmitButtonsComponent } from '../../../components/validate-submit-buttons/validate-submit-buttons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditProcurementRequestComponent', () => {
  let component: EditProcurementRequestComponent;
  let fixture: ComponentFixture<EditProcurementRequestComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        EditProcurementRequestComponent,
        ProcurementsRequestComponent,
        LoadingBubbleComponent,
        InputComponent,
        SelectComponent,
        ValidateSubmitButtonsComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProcurementRequestComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
