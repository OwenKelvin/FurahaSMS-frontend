import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('AcademicYearSubjectUnitsComponent', () => {
  let component: AcademicYearSubjectUnitsComponent;
  let fixture: ComponentFixture<AcademicYearSubjectUnitsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AcademicYearSubjectUnitsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearSubjectUnitsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
