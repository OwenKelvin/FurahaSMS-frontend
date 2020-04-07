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

  getTotalClassLevelFees(academicYearId: number, classLevelId: number) {
    return this.costItems.filter(item => {
      const itemValue = item as any;
      return academicYearId === itemValue.academicYearId &&
        classLevelId === itemValue.classLevelId;
    }).map(({ amount }) => amount).reduce((a, b) => a + b, 0);
  }
  getCostValue(academicYearId: number, classLevelId: number, semesterId: number) {
    return this.costItems.filter(item => {
      const itemValue = item as any;
      return academicYearId === itemValue.academicYearId &&
        semesterId === itemValue.semesterId &&
        classLevelId === itemValue.classLevelId;
    }).map(({ amount }) => amount).reduce((a, b) => a + b, 0);
  }
  ngOnInit() {
    this.componentIsActive = true;
    this.statement$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))),
        takeWhile(() => this.componentIsActive),
        mergeMap(studentId => this.studentFeePaymentService.getFeesStatementForStudentWithId(studentId)),
        tap(item => {

          const array = item.feeStructure
            .map((item1: any) => ({
              amount: item1.amount,
              academicYearId: item1.academic_year_id,
              academicYearName: item1.academic_year_name,
              classLevelId: item1.class_level_id,
              classLevelName: item1.class_level_name,
              semesterId: item1.semester_id,
              semesterName: item1.semester_name,
              key: String(item1.class_level_name) + String(item1.academic_year_name),

            }));
          this.costItems = array;
          let result = [];
          let mapS = new Map();
          for (const item1 of array) {
            if (!mapS.has(item1.key)) {
              mapS.set(item1.key, true);    // set any value to Map
              result.push({
                classLevelId: item1.classLevelId,
                classLevelName: item1.classLevelName,
                academicYearId: item1.academicYearId,
                academicYearName: item1.academicYearName
              });
            }
          }
          this.academicYears = result;


          mapS = new Map();
          result = [];
          for (const item1 of array) {
            if (!mapS.has(item1.semesterId)) {
              mapS.set(item1.semesterId, true);    // set any value to Map
              result.push({
                semesterId: item1.semesterId,
                semesterName: item1.semesterName,

              });
            }
          }
          this.semesters = result;
          this.otherFeesCosts = item.otherFees;

          const uniqueCostIds = [... new Set(item.otherFees
            .map(({ financialCostItemId }: any) =>
              financialCostItemId))];
          this.otherFees = uniqueCostIds.map(item1 => item.otherFees.find((_: any) => _.financialCostItemId === item1));
        }))
      ;

  }
  getOtherCostValue(academicYearId: number, classLevelId: number, semesterId: number, financialCostItemId: number): number {

    return this.otherFeesCosts.filter(val => {
      return +val.classLevelId === +classLevelId &&
        +val.semesterId === +semesterId &&
        +val.academicYearId === +academicYearId &&
        +val.financialCostItemId === +financialCostItemId;
    }).reduce((a, b) => a + b.amount, 0);
  }
  getOtherCostTotal(
    academicYearId: number,
    classLevelId?: number | null,
    financialCostItemId?: number | null,
    semesterId?: number | null
  ): number {
    if (typeof semesterId !== 'undefined') {
      return this.otherFeesCosts.filter(val => {
        return val.classLevelId === classLevelId &&
          val.academicYearId === academicYearId &&
          val.semesterId === semesterId;
      }).reduce((a, b) => a + b.amount, 0);
    }
    if (typeof financialCostItemId === 'undefined') {
      return this.otherFeesCosts.filter(val => {
        return val.classLevelId === classLevelId &&
          val.academicYearId === academicYearId;
      }).reduce((a, b) => a + b.amount, 0);
    }

    return this.otherFeesCosts.filter(val => {
      return val.classLevelId === classLevelId &&
        val.financialCostItemId === financialCostItemId &&
        val.academicYearId === academicYearId;
    }).reduce((a, b) => a + b.amount, 0);
  }
  ngOnDestroy() {
    this.componentIsActive = true;
  }
}
