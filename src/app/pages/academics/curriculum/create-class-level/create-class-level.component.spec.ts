import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassLevelComponent } from './create-class-level.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { CrudComponent } from '../../../../components/crud/crud.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorComponent } from '../../../../components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../components/input/input.component';
import { SelectComponent } from '../../../../components/select/select.component';

describe('CreateClassLevelComponent', () => {
  let component: CreateClassLevelComponent;
  let fixture: ComponentFixture<CreateClassLevelComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        CreateClassLevelComponent,
        CrudComponent,
        ErrorComponent,
        InputComponent,
        SelectComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
