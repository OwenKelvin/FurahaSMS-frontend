import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFeePaymentService } from '../../services/student-fee-payment.service';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-payment-fee-structure',
  templateUrl: './student-payment-fee-structure.component.html',
  styleUrls: ['./student-payment-fee-structure.component.css']
})
export class StudentPaymentFeeStructureComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  statement$: Observable<any>;
  academicYears: any[];
  semesters: any[];
  costItems: any[];
  otherFees: any[];
  otherFeesCosts: any[];

  constructor(
    private studentFeePaymentService: StudentFeePaymentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.statement$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))),
        takeWhile(() => this.componentIsActive),
        mergeMap(studentId => this.studentFeePaymentService.getFeesStatementForStudentWithId(studentId)),
        tap(item => {
          const {
            costItems,
            academicYears,
            semesters,
            otherFeesCosts,
            otherFees
          } = this.studentFeePaymentService.getFeeItemsDetails(item);

          this.costItems = costItems;
          this.academicYears = academicYears as any[];
          this.semesters = semesters as any[];
          this.otherFeesCosts = otherFeesCosts;
          this.otherFees = otherFees as any[];
        })
      );

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
    this.componentIsActive = true;
  }
}
