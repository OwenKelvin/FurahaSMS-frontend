import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentGuardiansComponent } from './view-student-guardians.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ViewStudentGuardiansComponent', () => {
  let component: ViewStudentGuardiansComponent;
  let fixture: ComponentFixture<ViewStudentGuardiansComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ViewStudentGuardiansComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentGuardiansComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
