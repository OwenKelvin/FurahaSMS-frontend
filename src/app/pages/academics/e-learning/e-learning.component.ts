import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.css']
})
export class ELearningComponent implements OnInit {
  links$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.links$ = of([
      { name: 'View Courses', icon: 'icon-docs', link: 'academics/e-learning/courses' },
      { name: 'Admin', icon: 'icon-user-secret', link: 'academics/e-learning/admin' },
    ]);
  }

}
