import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcurementsVendorsComponent } from './create-procurements-vendors.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBubbleComponent } from '../../loading-bubble/loading-bubble.component';
import { InputComponent } from '../../input/input.component';
import { TelInputComponent } from '../../tel-input/tel-input.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgSelectModule } from '@ng-select/ng-select';

describe('CreateProcurementsVendorsComponent', () => {
  let component: CreateProcurementsVendorsComponent;
  let fixture: ComponentFixture<CreateProcurementsVendorsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TabsModule.forRoot(),
        NgSelectModule
      ],
      declarations: [
        CreateProcurementsVendorsComponent,
        LoadingBubbleComponent,
        InputComponent,
        TelInputComponent,

      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcurementsVendorsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
