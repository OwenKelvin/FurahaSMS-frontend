import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRecentlyCreatedComponent } from './students-recently-created.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('StudentRecentlyCreatedComponent', () => {
  let component: StudentsRecentlyCreatedComponent;
  let fixture: ComponentFixture<StudentsRecentlyCreatedComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ StudentsRecentlyCreatedComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRecentlyCreatedComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
