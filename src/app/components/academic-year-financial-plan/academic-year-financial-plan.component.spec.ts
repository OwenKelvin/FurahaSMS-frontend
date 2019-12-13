import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearFinancialPlanComponent } from './academic-year-financial-plan.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AcademicYearFinancialPlanComponent', () => {
  let component: AcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<AcademicYearFinancialPlanComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ AcademicYearFinancialPlanComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
