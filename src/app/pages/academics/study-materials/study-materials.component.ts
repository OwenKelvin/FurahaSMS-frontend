import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-study-materials',
  templateUrl: './study-materials.component.html',
  styleUrls: ['./study-materials.component.css']
})
export class StudyMaterialsComponent implements OnInit {

  constructor() { }
  links$: Observable<any>
  ngOnInit() {
    this.links$ = of([
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

}
