import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumComponent } from './academics-curriculum.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AcademicsCurriculumComponent', () => {
  let component: AcademicsCurriculumComponent;
  let fixture: ComponentFixture<AcademicsCurriculumComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AcademicsCurriculumComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
