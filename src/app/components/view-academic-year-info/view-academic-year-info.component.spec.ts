import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicYearInfoComponent } from './view-academic-year-info.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ViewAcademicYearInfoComponent', () => {
  let component: ViewAcademicYearInfoComponent;
  let fixture: ComponentFixture<ViewAcademicYearInfoComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ViewAcademicYearInfoComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicYearInfoComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
