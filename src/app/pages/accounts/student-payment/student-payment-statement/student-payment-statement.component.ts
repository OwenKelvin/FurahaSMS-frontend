import {Component} from '@angular/core';
import {StudentFeePaymentService} from '../../services/student-fee-payment.service';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {selectStudentFeeStatement} from '../../store/selectors/student-fee-statement.selectors';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-student-payment-statement',
  templateUrl: './student-payment-statement.component.html',
  styleUrls: ['./student-payment-statement.component.css']
})
export class StudentPaymentStatementComponent {
  costItems: any[];
  otherFeesCosts: any[];
  academicYears: any[];
  semesters: any[];
  otherFees: any[];
  paymentReceipts: any[];
  studentId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))));
  loadStudentFee$ = this.studentId$.pipe(mergeMap(id => this.studentFeePaymentService.loadStudentFee$(id)));
  feeStatement$ = this.studentId$.pipe(
    mergeMap((id) => this.store.select(selectStudentFeeStatement(id))),
    tap(item => {
      const {
        costItems, academicYears, semesters, otherFeesCosts, otherFees, paymentReceipts
      } = this.studentFeePaymentService.getFeeItemsDetails(item);

      this.paymentReceipts = paymentReceipts as any[];
      this.costItems = costItems;
      this.academicYears = academicYears as any[];
      this.semesters = semesters as any[];
      this.otherFeesCosts = otherFeesCosts;
      this.otherFees = otherFees as any[];
    })
  );

  v$ = combineLatest([this.loadStudentFee$, this.feeStatement$])
    .pipe(map(([, statement]) => ({statement})));

  constructor(
    private studentFeePaymentService: StudentFeePaymentService,
    private route: ActivatedRoute,
    private store: Store
  ) {
  }

  get totalCost(): number {
    const totalTuitionFee = this.costItems?.reduce((a: number, b) => a + b.amount, 0);
    const otherFees = this.otherFeesCosts?.reduce((a: number, b) => a + b.amount, 0);
    return totalTuitionFee + otherFees;

  }

  get totalFeePayments(): number {
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


}
