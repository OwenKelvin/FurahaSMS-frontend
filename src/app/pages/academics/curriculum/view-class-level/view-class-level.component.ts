import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-view-class-level',
  templateUrl: './view-class-level.component.html',
  styleUrls: ['./view-class-level.component.css']
})
export class ViewClassLevelComponent implements OnInit {
  classLevel: ClassLevelService;

  constructor(private store: Store<AppState>, private classLevelService: ClassLevelService) { }

  ngOnInit() {
    this.classLevel = this.classLevelService;
  }

}
