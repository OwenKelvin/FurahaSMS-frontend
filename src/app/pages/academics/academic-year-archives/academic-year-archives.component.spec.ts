import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearArchivesComponent } from './academic-year-archives.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

describe('AcademicYearArchivesComponent', () => {
  let component: AcademicYearArchivesComponent;
  let fixture: ComponentFixture<AcademicYearArchivesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AcademicYearArchivesComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearArchivesComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
