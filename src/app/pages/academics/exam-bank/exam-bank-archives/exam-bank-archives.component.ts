import { Component, OnInit } from '@angular/core';
import { ExamPaperService } from '../services/exam-paper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exam-bank-archives',
  templateUrl: './exam-bank-archives.component.html',
  styleUrls: ['./exam-bank-archives.component.css']
})
export class ExamBankArchivesComponent implements OnInit {
  examPapers$: Observable<any>;

  constructor(private examPaperService: ExamPaperService) { }

  ngOnInit() {
    this.examPapers$ = this.examPaperService.getRecentExamPapers();
  }

}
