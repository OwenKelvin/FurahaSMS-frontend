import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectICan } from 'src/app/pages/my-profile/store/selectors/my-profile.selectors';

@Component({
  selector: 'app-time-table-academic-year-view',
  templateUrl: './time-table-academic-year-view.component.html',
  styleUrls: ['./time-table-academic-year-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableAcademicYearViewComponent {

  isOpen: boolean[] = [false];

  academicYearId$ = this.route.parent?.paramMap.pipe(map(params => Number(params.get('id'))));
  timeTableId$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))));
  
  params$ = combineLatest([this.academicYearId$, this.timeTableId$]).pipe(
    map(([academicYearId, timeTableId]: any[]) => ({ academicYearId, timeTableId}))
  );

  canEditTimeTable$ = this.store.select(selectICan('update time table'));

  academicYearName$ = this.academicYearId$?.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({ id })),
    map(({ name }) => name)
  );

  timetable$: Observable<any[]> = this.params$.pipe(
    mergeMap(params => this.timeTableService.getLessonsFor(params))
  );

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
          grouped: this.timeTableService.groupByDayOfWeek(values)
        }
      };

    }, {})))
  );

  constructor(
    private academicYearService: AcademicYearService,
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
    private store: Store
  ) { }

}
