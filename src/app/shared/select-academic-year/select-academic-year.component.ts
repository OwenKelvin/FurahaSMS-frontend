import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {AcademicYearService} from 'src/app/pages/academics/services/academic-year.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-academic-year',
  templateUrl: './select-academic-year.component.html',
  styleUrls: ['./select-academic-year.component.css']
})
export class SelectAcademicYearComponent {
  @Input() title: string;
  @Input() routes: (string | number)[];
  academicYears$: Observable<any> = this.academicYear.all$;
  selectedAcademicYear: number;
  constructor(private academicYear: AcademicYearService, private router: Router) {
  }
  routesLinks = (): (string | number)[] => this.routes
      .map(item => item === ':id' ? (this.selectedAcademicYear ? this.selectedAcademicYear : '') : item);
  goToAcademicYear() {
    if(!this.selectedAcademicYear) {return false;}
    return this.router.navigate(this.routesLinks()).then();
  }
}
