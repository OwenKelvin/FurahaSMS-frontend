import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-time-table-academic-year-edit',
  templateUrl: './time-table-academic-year-edit.component.html',
  styleUrls: ['./time-table-academic-year-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableAcademicYearEditComponent {

  isOpen: boolean[] = [true];

  activatedRouteParam$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))));

  academicYearName$ = this.activatedRouteParam$.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({ id })),
    map(({ name }) => name)
  );

  timetable$: Observable<any[]> = this.activatedRouteParam$.pipe(
    mergeMap(id => this.timeTableService.getForAcademicYear(id))
  );

  classLevels$ = combineLatest([
    this.timeTableService.daysOfTheWeek$,
    this.timetable$
  ]).pipe(
    map(([daysOfTheWeek, timetable]) => Object.values(timetable.reduce((prev, next) => {
      const values = [...(prev[next.classLevelId]?.values || []), next];
      const daysOfWeek = daysOfTheWeek.map(({ name }) => name);
      const timings = [...(new Set([...(prev[next.classLevelId]?.timings || []), next.timeValue]))];
      const streams = [...(new Set([...(prev[next.classLevelId]?.streams || []), next.streamName]))];
      return {
        ...prev, [next.classLevelId]: {
          id: next.classLevelId,
          name: next.classLevelName,
          daysOfWeek,
          timings,
          streams,
          values,
          grouped: this.timeTableService.groupByDayOfWeek(values)
        }
      };

    }, {})))
  );


  constructor(
    private academicYearService: AcademicYearService,
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
  ) { }

}
