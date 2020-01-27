import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcurementTenderComponent } from './create-procurement-tender.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ProcurementItemComponent } from '../procurement-item/procurement-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { InputComponent } from '../../../components/input/input.component';

describe('CreateProcurementTenderComponent', () => {
  let component: CreateProcurementTenderComponent;
  let fixture: ComponentFixture<CreateProcurementTenderComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule, ReactiveFormsModule
      ],
      declarations: [
        CreateProcurementTenderComponent,
        ProcurementItemComponent,
        LoadingBubbleComponent,
        InputComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcurementTenderComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});