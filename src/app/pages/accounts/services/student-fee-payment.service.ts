import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectStudentFeeStatement} from '../store/selectors/student-fee-statement.selectors';
import {tap} from 'rxjs/operators';
import {loadStudentFeeStatements} from '../store/actions/student-fee-statement.actions';

@Injectable({
  providedIn: 'root'
})
export class StudentFeePaymentService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  loadStudentFee$ = (id: number) => this.store.pipe(
    select(selectStudentFeeStatement(id)),
    tap((res) => !res ? this.store.dispatch(loadStudentFeeStatements({data: {id}})) : ''),
  );

  getFeesStatementForStudentWithId(studentId: number): Observable<any> {
    const url = `api/students/${studentId}/fee-statement`;
    return this.http.get(url);
  }

  save({studentId, data}: { studentId: number; data: any }): Observable<any> {
    const submitData = {
      amount: data.paymentAmount.replace(/,/g, ''), // TODO-me Convert this to match locale
      ['transaction_date']: data.paymentDate,
      ref: data.paymentRef,
      ['payment_method_id']: data.paymentType
    };
    return this.http.post(`api/accounts/students/${studentId}/fee-payment-receipt`, submitData);
  }

  getFeeItemsDetails(item: any) {
    if (!item?.feeStructure) {
      return {};
    }
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
    const costItems = array;
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
    const academicYears = result;


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
    const semesters = result;
    const otherFeesCosts = item.otherFees;
    const paymentReceipts = item.payments;

    const uniqueCostIds = [...new Set(item.otherFees
      .map(({financialCostItemId}: any) =>
        financialCostItemId))];
    const otherFees = uniqueCostIds.map(item1 => item.otherFees.find((_: any) => _.financialCostItemId === item1));
    return {costItems, academicYears, semesters, otherFeesCosts, otherFees, paymentReceipts};
  }

  getTotalClassLevelFees(costItems: any[], academicYearId: number, classLevelId: number) {
    return costItems.filter(item => {
      const itemValue = item as any;
      return academicYearId === itemValue.academicYearId &&
        classLevelId === itemValue.classLevelId;
    }).map(({amount}) => amount).reduce((a, b) => a + b, 0);
  }

  getCostValue(costItems: any[], academicYearId: number, classLevelId: number, semesterId: number) {
    return costItems.filter(item => {
      const itemValue = item as any;
      return academicYearId === itemValue.academicYearId &&
        semesterId === itemValue.semesterId &&
        classLevelId === itemValue.classLevelId;
    }).map(({amount}) => amount).reduce((a, b) => a + b, 0);
  }

  getOtherCostValue(
    otherFeesCosts: any[],
    academicYearId: number,
    classLevelId: number,
    semesterId: number,
    financialCostItemId: number
  ): number {

    return otherFeesCosts.filter(val => +val.classLevelId === +classLevelId &&
        +val.semesterId === +semesterId &&
        +val.academicYearId === +academicYearId &&
        +val.financialCostItemId === +financialCostItemId).reduce((a, b) => a + b.amount, 0);
  }

  getOtherCostTotal(
    otherFeesCosts: any[],
    academicYearId: number,
    classLevelId?: number | null,
    financialCostItemId?: number | null,
    semesterId?: number | null
  ): number {
    if (typeof semesterId !== 'undefined') {
      return otherFeesCosts.filter(val => val.classLevelId === classLevelId &&
          val.academicYearId === academicYearId &&
          val.semesterId === semesterId).reduce((a, b) => a + b.amount, 0);
    }
    if (typeof financialCostItemId === 'undefined') {
      return otherFeesCosts.filter(val => val.classLevelId === classLevelId &&
          val.academicYearId === academicYearId).reduce((a, b) => a + b.amount, 0);
    }

    return otherFeesCosts.filter(val => val.classLevelId === classLevelId &&
        val.financialCostItemId === financialCostItemId &&
        val.academicYearId === academicYearId).reduce((a, b) => a + b.amount, 0);
  }

}
