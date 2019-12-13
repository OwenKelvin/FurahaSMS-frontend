import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumUnitsComponent } from './academics-curriculum-units.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AcademicsCurriculumUnitsComponent', () => {
  let component: AcademicsCurriculumUnitsComponent;
  let fixture: ComponentFixture<AcademicsCurriculumUnitsComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AcademicsCurriculumUnitsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumUnitsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
