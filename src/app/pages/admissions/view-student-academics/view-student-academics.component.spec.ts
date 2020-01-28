import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentAcademicsComponent } from './view-student-academics.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewStudentAcademicsComponent', () => {
  let component: ViewStudentAcademicsComponent;
  let fixture: ComponentFixture<ViewStudentAcademicsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ ViewStudentAcademicsComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentAcademicsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
