import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-e-learning-topic-materials',
  templateUrl: './e-learning-topic-materials.component.html',
  styleUrls: ['./e-learning-topic-materials.component.css']
})
export class ELearningTopicMaterialsComponent implements OnInit {
  @Input() learningContents: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
