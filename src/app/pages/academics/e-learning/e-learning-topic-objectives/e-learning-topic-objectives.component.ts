import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-e-learning-topic-objectives',
  templateUrl: './e-learning-topic-objectives.component.html',
  styleUrls: ['./e-learning-topic-objectives.component.css']
})
export class ELearningTopicObjectivesComponent implements OnInit {
  
  @Input() topicNumberStyleName: string;
  @Input() learningOutcomes: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
