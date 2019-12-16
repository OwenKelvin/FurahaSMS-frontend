import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { VIEW_CLASS_LEVEL_CURRICULUM } from 'src/app/helpers/links.helpers';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';

@Component({
  selector: 'app-create-class-level',
  templateUrl: './create-class-level.component.html',
  styleUrls: ['./create-class-level.component.css']
})
export class CreateClassLevelComponent implements OnInit {
  viewLink: (id: string | number) => string;
  classLevel: ClassLevelService;
  transforms: TransformInterface[];
  constructor(private store: Store<AppState>, private classLevelService: ClassLevelService) { }

  ngOnInit() {
    this.viewLink = VIEW_CLASS_LEVEL_CURRICULUM;
    this.classLevel = this.classLevelService;
    this.transforms = [
      {
        from: 'abbr', to: 'abbreviation'
      }, {
        from: 'parentCategory', to: 'classLevelCategory'
      }
    ];
  }

}
