import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportStaffAdmissionComponent } from './support-staff-admission.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('SupportStaffAdmissionComponent', () => {
  let component: SupportStaffAdmissionComponent;
  let fixture: ComponentFixture<SupportStaffAdmissionComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SupportStaffAdmissionComponent ]
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
