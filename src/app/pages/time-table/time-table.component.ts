import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';
import { AcademicYearService } from '../academics/services/academic-year.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent {
  links$: Observable<LinkInterface[]> = this.linkService.timeTableLinks;
  academicYears$ = this.academicYearService.all$;
    constructor(private linkService: LinkService, private academicYearService: AcademicYearService) { }

}
