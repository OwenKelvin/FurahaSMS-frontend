import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdmissionsEditComponent } from './student-admissions-edit.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { StudentSearchComponent } from '../../../components/student-search/student-search.component';
import { StudentsRecentlyCreatedComponent } from '../students-recently-created/students-recently-created.component';

describe('StudentAdmissionsEditComponent', () => {
  let component: StudentAdmissionsEditComponent;
  let fixture: ComponentFixture<StudentAdmissionsEditComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ StudentAdmissionsEditComponent, StudentSearchComponent, StudentsRecentlyCreatedComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionsEditComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
