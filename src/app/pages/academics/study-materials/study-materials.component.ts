import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-study-materials',
  templateUrl: './study-materials.component.html',
  styleUrls: ['./study-materials.component.css']
})
export class StudyMaterialsComponent {

  links$: Observable<any> = of([
    {
      name: 'Archives',
      icon: 'icon-folder',
      link: 'academics/study-materials/archives'
    },
    {
      name: 'Admin',
      icon: 'icon-user-secret',
      link: 'academics/study-materials/admin'
    },
  ]);

}
