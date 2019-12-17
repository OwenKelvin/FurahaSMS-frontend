import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { ClassLevelService } from 'src/app/services/class-level.service';

@Component({
  selector: 'app-view-class-level',
  templateUrl: './view-class-level.component.html',
  styleUrls: ['./view-class-level.component.css']
})
export class ViewClassLevelComponent implements OnInit {
  classLevel: ClassLevelService;

  constructor(private store: Store<fromStore.AppState>, private classLevelService: ClassLevelService) { }

  ngOnInit() {
    this.classLevel = this.classLevelService
  }

}
