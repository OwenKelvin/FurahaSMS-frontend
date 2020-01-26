import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { map } from 'rxjs/operators';
import { UnitLevelService } from 'src/app/services/unit-level.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-academic-year-subject-units',
  templateUrl: './academic-year-subject-units.component.html',
  styleUrls: ['./academic-year-subject-units.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AcademicYearSubjectUnitsComponent implements OnInit {
  people: any[] = [];
  selectedPeople = [];
  constructor(private store: Store<fromStore.AppState>, private unitLevelService: UnitLevelService) { }

  ngOnInit() {
    this.unitLevelService.getAll()
    .pipe(map(x => x.filter(y => !y.disabled)))
    .subscribe((res) => {
      this.people = res;
      this.selectedPeople = [this.people[0].id, this.people[1].id];
    });
  }

}
