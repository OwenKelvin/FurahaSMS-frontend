import { Component, OnInit } from '@angular/core';
import { StudyMaterialsService } from '../services/study-materials.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-study-materials-archive',
  templateUrl: './study-materials-archive.component.html',
  styleUrls: ['./study-materials-archive.component.css']
})
export class StudyMaterialsArchiveComponent implements OnInit {
  studyMaterials$: Observable<any>;

  constructor(
    private studyMaterialsService: StudyMaterialsService
  ) { }

  ngOnInit() {
    this.studyMaterials$ = this.studyMaterialsService.getAll({ active: true})
  }

}
