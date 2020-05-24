import { Component } from '@angular/core';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';
import { ClassLevelService } from 'src/app/services/class-level.service';

@Component({
  selector: 'app-edit-class-level',
  templateUrl: './edit-class-level.component.html',
  styleUrls: ['./edit-class-level.component.css']
})
export class EditClassLevelComponent {
  transforms: TransformInterface[] = [{ from: 'parentCategory', to: 'classLevelCategory' }];
  constructor(public classLevelService: ClassLevelService) { }
}
