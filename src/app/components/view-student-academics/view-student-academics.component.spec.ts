import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentAcademicsComponent } from './view-student-academics.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ViewStudentAcademicsComponent', () => {
  let component: ViewStudentAcademicsComponent;
  let fixture: ComponentFixture<ViewStudentAcademicsComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ViewStudentAcademicsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentAcademicsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
