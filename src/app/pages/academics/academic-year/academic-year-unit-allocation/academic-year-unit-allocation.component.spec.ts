import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearUnitAllocationComponent } from './academic-year-unit-allocation.component';
import { AcademicsModule } from '../../academics.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { reducerProvider } from 'src/app/store/reducers';

describe('AcademicYearUnitAllocationComponent', () => {
  let component: AcademicYearUnitAllocationComponent;
  let fixture: ComponentFixture<AcademicYearUnitAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AcademicsModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule
      ],
      declarations: [AcademicYearUnitAllocationComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearUnitAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
