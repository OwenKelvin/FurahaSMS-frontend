import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-time-table-academic-year-view',
  templateUrl: './time-table-academic-year-view.component.html',
  styleUrls: ['./time-table-academic-year-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableAcademicYearViewComponent {

  isOpen: boolean[] = [false];

  activatedRouteParam$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))));

  academicYearName$ = this.activatedRouteParam$.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({ id })),
    map(({ name }) => name)
  );

  timetable$: Observable<any[]> = this.activatedRouteParam$.pipe(
    mergeMap(id => this.timeTableService.getForAcademicYear(id))
  );

  groupByDatOfWeek(values: any[]) {

    return values.reduce((prev, next) => {
      const dayOfWeek = prev[next.dayOfWeekName] || {};
      const stream = dayOfWeek[next.streamName] || {};
      return {
        ...prev,
        [next.dayOfWeekName]: {
          ...dayOfWeek,
          [next.streamName]: {
            ...stream,
            [next.timeValue]: next
          }
        }
      };
    }, {});
  }

  classLevels$ = this.timetable$.pipe(
    map(timetable => Object.values(timetable.reduce((prev, next) => {
      const values = [...(prev[next.classLevelId]?.values || []), next];
      const daysOfWeek = [...(new Set([...(prev[next.classLevelId]?.daysOfWeek || []), next.dayOfWeekName]))];
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
          grouped: this.groupByDatOfWeek(values)
        }
      };

    }, {})))
  );

  constructor(
    private academicYearService: AcademicYearService,
    private timeTableService: TimeTableService, private route: ActivatedRoute) { }

}
