import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-e-learning-course',
  templateUrl: './e-learning-course.component.html',
  styleUrls: ['./e-learning-course.component.css']
})
export class ELearningCourseComponent implements OnInit {
  @Input() course: any;
  constructor() { }

  ngOnInit(): void {
  }

}
