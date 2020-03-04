import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentAcademicsService } from 'src/app/pages/students/services/student-academics.service';
import { ActivatedRoute } from '@angular/router';
import { map, takeWhile, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-payment-statement',
  templateUrl: './student-payment-statement.component.html',
  styleUrls: ['./student-payment-statement.component.css']
})
export class StudentPaymentStatementComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  statement$: Observable<any>;
  academicYears: any[];
  semesters: any[];
  costItems: any[];
  otherFees: any[];
  otherFeesCosts: any[];

  constructor(
    private studentAcademicsService: StudentAcademicsService,
    private route: ActivatedRoute
  ) { }

  getTotalClassLevelFees(academicYearId, classLevelId) {
    return this.costItems.filter(item => {
      const itemValue = item as any;
      return academicYearId === itemValue.academicYearId &&
        classLevelId === itemValue.classLevelId;
    }).map(({ amount }) => amount).reduce((a, b) => a + b, 0);
  }
  getCostValue(academicYearId, classLevelId, semesterId) {
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
      .pipe(map(params => +params.get('id')))
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(mergeMap(studentId => this.studentAcademicsService.getFeesStatementForStudentWithId(studentId)))
      .pipe(tap(item => {

        const array = item.feeStructure
          .map(item1 => ({
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
          .map(({ financialCostItemId }) =>
            financialCostItemId))];
        this.otherFees = uniqueCostIds.map(item1 => item.otherFees.find(_ => _.financialCostItemId === item1));
      }))
      ;

  }
  getOtherCostValue(academicYearId, classLevelId, semesterId, financialCostItemId): number {

    return this.otherFeesCosts.filter(val => {
      return +val.classLevelId === +classLevelId &&
        +val.semesterId === +semesterId &&
        +val.academicYearId === +academicYearId &&
        +val.financialCostItemId === +financialCostItemId;
    }).reduce((a, b) => a + b.amount, 0);
  }
  getOtherCostTotal(academicYearId: number, classLevelId?: number, financialCostItemId?: number, semesterId?: number): number {
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
