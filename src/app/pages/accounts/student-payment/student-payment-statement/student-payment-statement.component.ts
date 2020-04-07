import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentFeePaymentService } from '../../services/student-fee-payment.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-student-payment-statement',
  templateUrl: './student-payment-statement.component.html',
  styleUrls: ['./student-payment-statement.component.css']
})
export class StudentPaymentStatementComponent implements OnInit, OnDestroy {
  componentIsActive: boolean;
  constructor(
    private studentFeePaymentService: StudentFeePaymentService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      mergeMap((id) => this.studentFeePaymentService.loadStudentFee$(id)),
      takeWhile(() => this.componentIsActive)
    ).subscribe()
    
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}