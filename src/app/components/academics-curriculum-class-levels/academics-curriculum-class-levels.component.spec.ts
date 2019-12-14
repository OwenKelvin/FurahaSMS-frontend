import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumClassLevelsComponent } from './academics-curriculum-class-levels.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('AcademicsCurriculumClassLevelsComponent', () => {
  let component: AcademicsCurriculumClassLevelsComponent;
  let fixture: ComponentFixture<AcademicsCurriculumClassLevelsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AcademicsCurriculumClassLevelsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumClassLevelsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
