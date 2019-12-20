import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentGuardiansComponent } from './view-student-guardians.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewStudentGuardiansComponent', () => {
  let component: ViewStudentGuardiansComponent;
  let fixture: ComponentFixture<ViewStudentGuardiansComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ ViewStudentGuardiansComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentGuardiansComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
