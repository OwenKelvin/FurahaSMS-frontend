import { Component } from '@angular/core';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-academic-year-archives',
  templateUrl: './academic-year-archives.component.html',
  styleUrls: ['./academic-year-archives.component.css']
})
export class AcademicYearArchivesComponent {
  academicYears$: Observable<any> = this.academicYearService.all$;;
  constructor(private academicYearService: AcademicYearService) { }

}
