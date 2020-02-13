import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademicYearFinancialPlanComponent } from './edit-academic-year-financial-plan.component';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('EditAcademicYearFinancialPlanComponent', () => {
  let component: EditAcademicYearFinancialPlanComponent;
  let fixture: ComponentFixture<EditAcademicYearFinancialPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TabErrorStateModule,
        FormsModule,
        ReactiveFormsModule,
        TabsModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppInputModule,
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        AccordionModule.forRoot()
      ],
      declarations: [EditAcademicYearFinancialPlanComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcademicYearFinancialPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
