import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnitComponent } from './create-unit.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { ErrorComponent } from 'src/app/components/error/error.component';

describe('CreateUnitComponent', () => {
  let component: CreateUnitComponent;
  let fixture: ComponentFixture<CreateUnitComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        AppInputModule
      ],
      declarations: [CreateUnitComponent,
       ErrorComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnitComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
