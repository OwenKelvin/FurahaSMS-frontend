import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingStaffAdmissionComponent } from './teaching-staff-admission.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('TeachingStaffAdmissionComponent', () => {
  let component: TeachingStaffAdmissionComponent;
  let fixture: ComponentFixture<TeachingStaffAdmissionComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TeachingStaffAdmissionComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingStaffAdmissionComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
