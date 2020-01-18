import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProcurementTenderComponent } from '../procurements/create-procurement-tender/create-procurement-tender.component';
import { AppState } from 'src/app/store/reducers';
import { ProcurementItemComponent } from '../procurements/procurement-item/procurement-item.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { InputComponent } from '../input/input.component';


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
