import { Component, OnInit } from '@angular/core';
import { StudyMaterialsService } from '../services/study-materials.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-study-materials-archive',
  templateUrl: './study-materials-archive.component.html',
  styleUrls: ['./study-materials-archive.component.css']
})
export class StudyMaterialsArchiveComponent implements OnInit {
  studyMaterials$: Observable<any[]>;
  studyMaterials: any[];
  filterString = '';
  constructor(
    private studyMaterialsService: StudyMaterialsService
  ) { }

  ngOnInit() {
    this.studyMaterials$ = this.studyMaterialsService.getAll({ active: true })
      .pipe(tap((res: any) => this.studyMaterials = res));
  }
  get filteredStudyMaterials(): any[] {
    return this.studyMaterials
      .filter(({ title }: { title: string }) => title.includes(this.filterString) );
  }

  getLink(id: number, type: string): (string | number)[] {
    if (type === 'pdf') {
       return ['/academics', 'study-materials', id, 'view'];
    }
    return ['/academics', 'study-materials', id, 'download'];
  }

}
