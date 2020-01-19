import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportStaffAdmissionComponent } from './support-staff-admission.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { SelectComponent } from '../../../components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupportStaffAdmissionComponent', () => {
  let component: SupportStaffAdmissionComponent;
  let fixture: ComponentFixture<SupportStaffAdmissionComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [ SupportStaffAdmissionComponent, SelectComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportStaffAdmissionComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
