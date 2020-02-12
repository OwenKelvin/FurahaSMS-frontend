import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-exam-paper',
  templateUrl: './admin-exam-paper.component.html',
  styleUrls: ['./admin-exam-paper.component.css']
})
export class AdminExamPaperComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    
  }

}
