import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentFeePaymentService } from '../../services/student-fee-payment.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectStudentFeeStatement } from '../../store/selectors/student-fee-statement.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-payment-statement',
  templateUrl: './student-payment-statement.component.html',
  styleUrls: ['./student-payment-statement.component.css']
})
export class StudentPaymentStatementComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  feeStatement$: Observable<any>;
  costItems: any[];
  otherFeesCosts: any[];
  academicYears: any[];
  semesters: any[];
  otherFees: any[];
  paymentReceipts: any[];
  constructor(
    private studentFeePaymentService: StudentFeePaymentService,
    private route: ActivatedRoute,
    private store: Store
  ) { }
  ngOnInit() {
    this.componentIsActive = true;
    this.feeStatement$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      tap((id) => {
        this.studentFeePaymentService.loadStudentFee$(id).pipe(
          takeWhile(() => this.componentIsActive)
        ).subscribe()
      }),
      mergeMap((id) => this.store.select(selectStudentFeeStatement(id))),
      tap(item => {
        const {
          costItems,
          academicYears,
          semesters,
          otherFeesCosts,
          otherFees,
          paymentReceipts
        } = this.studentFeePaymentService.getFeeItemsDetails(item);

        this.paymentReceipts = paymentReceipts as any[];
        this.costItems = costItems;
        this.academicYears = academicYears as any[];
        this.semesters = semesters as any[];
        this.otherFeesCosts = otherFeesCosts;
        this.otherFees = otherFees as any[];
      })
    )

  }

  get totalCost(): number {
    const totalTuitionFee = this.costItems?.reduce((a: number, b) => a + b.amount, 0);
    const otherFees = this.otherFeesCosts?.reduce((a: number, b) => a + b.amount, 0);
    return totalTuitionFee + otherFees;

  }

  get totalFeePayments():number {
    return this.paymentReceipts ? this.paymentReceipts.reduce((a, b) => a + b.amount, 0) : 0;
  }
  getTotalClassLevelFees = (academicYearId: number, classLevelId: number): number =>
    this.studentFeePaymentService
      .getTotalClassLevelFees(this.costItems, academicYearId, classLevelId);

  getCostValue = (academicYearId: number, classLevelId: number, semesterId: number): number =>
    this.studentFeePaymentService
      .getCostValue(this.costItems, academicYearId, classLevelId, semesterId);

  getOtherCostValue = (
    academicYearId: number,
    classLevelId: number,
    semesterId: number,
    financialCostItemId: number
  ): number => this.studentFeePaymentService
    .getOtherCostValue(this.otherFeesCosts, academicYearId, classLevelId, semesterId, financialCostItemId);

  getOtherCostTotal = (
    academicYearId: number,
    classLevelId?: number | null,
    financialCostItemId?: number | null,
    semesterId?: number | null
  ): number => this.studentFeePaymentService
    .getOtherCostTotal(this.otherFeesCosts, academicYearId, classLevelId, financialCostItemId, semesterId);
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}