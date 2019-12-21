import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TelInputComponent } from './tel-input.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TelInputComponent', () => {
  let component: TelInputComponent;
  let fixture: ComponentFixture<TelInputComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        NgSelectModule, FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule],
      declarations: [ TelInputComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(inject ([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(TelInputComponent);
    component = fixture.componentInstance;
    component.formControl = jasmine.createSpyObj(fb.group({

    }));
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
