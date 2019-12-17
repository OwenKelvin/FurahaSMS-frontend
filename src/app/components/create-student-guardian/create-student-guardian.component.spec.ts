import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentGuardianComponent } from './create-student-guardian.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CreateStudentGuardianComponent', () => {
  let component: CreateStudentGuardianComponent;
  let fixture: ComponentFixture<CreateStudentGuardianComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CreateStudentGuardianComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentGuardianComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
