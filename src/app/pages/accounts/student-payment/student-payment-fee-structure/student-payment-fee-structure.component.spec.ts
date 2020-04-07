import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentFeeStructureComponent } from './student-payment-fee-structure.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('StudentPaymentFeeStructureComponent', () => {
  let component: StudentPaymentFeeStructureComponent;
  let fixture: ComponentFixture<StudentPaymentFeeStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule
      ],
      declarations: [ StudentPaymentFeeStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
