import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-add-study-materials-title',
  templateUrl: './add-study-materials-title.component.html',
  styleUrls: ['./add-study-materials-title.component.css'],
})
export class AddStudyMaterialsTitleComponent implements OnInit {

  @Input() items: any[] | null;
  constructor() { }

  ngOnInit() {
  }

}
