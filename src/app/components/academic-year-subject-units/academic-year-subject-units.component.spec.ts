import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearSubjectUnitsComponent } from './academic-year-subject-units.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AcademicYearSubjectUnitsComponent', () => {
  let component: AcademicYearSubjectUnitsComponent;
  let fixture: ComponentFixture<AcademicYearSubjectUnitsComponent>;
  let store: Store<any>;

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
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
