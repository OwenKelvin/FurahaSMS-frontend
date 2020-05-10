import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-exam-bank-dashboard',
  templateUrl: './exam-bank-dashboard.component.html',
  styleUrls: ['./exam-bank-dashboard.component.css']
})
export class ExamBankDashboardComponent {

  links$: Observable<LinkInterface[]> = this.linkService.examBankLinks;
  constructor(private linkService: LinkService) { }

}
