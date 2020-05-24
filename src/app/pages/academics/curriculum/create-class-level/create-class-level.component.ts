import { Component } from '@angular/core';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';

@Component({
  selector: 'app-create-class-level',
  templateUrl: './create-class-level.component.html',
  styleUrls: ['./create-class-level.component.css']
})
export class CreateClassLevelComponent {

  transforms: TransformInterface[] = [
    { from: 'abbr', to: 'abbreviation' },
    { from: 'parentCategory', to: 'classLevelCategory' }
  ];;
  constructor(public classLevelService: ClassLevelService) { }


}
