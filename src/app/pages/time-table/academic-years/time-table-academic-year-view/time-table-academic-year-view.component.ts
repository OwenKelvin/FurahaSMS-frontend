import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TimeTableService} from '../../services/time-table.service';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {AcademicYearService} from 'src/app/pages/academics/services/academic-year.service';
import {Observable, combineLatest} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectICan} from 'src/app/pages/my-profile/store/selectors/my-profile.selectors';
import {TeacherService} from 'src/app/pages/admissions/services/teacher.service';
import {UnitsService} from 'src/app/services/units.service';
import {SchoolRoomService} from 'src/app/pages/infrastructures/services/school-room.service';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {ClassStreamService} from 'src/app/pages/academics/services/class-stream.service';

@Component({
  selector: 'app-time-table-academic-year-view',
  templateUrl: './time-table-academic-year-view.component.html',
  styleUrls: ['./time-table-academic-year-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableAcademicYearViewComponent {

  isOpen: boolean[] = [false];

  academicYearId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  timeTableId$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))));

  params$ = combineLatest([this.academicYearId$, this.timeTableId$]).pipe(
    map(([academicYearId, timeTableId]: any[]) => ({academicYearId, timeTableId}))
  );

  canEditTimeTable$ = this.store.select(selectICan('update time table'));

  academicYearName$ = this.academicYearId$?.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({id})),
    map(({name}) => name)
  );

  timetableRawLessons$: Observable<any[]> = this.params$.pipe(
    mergeMap(params => this.timeTableService.getLessonsFor(params)));

  teachers$: Observable<any[]> = this.teacherService.getActiveTeachers();
  units$: Observable<any[]> = this.unitsService.getAllActiveSubjects();
  rooms$: Observable<any[]> = this.schoolRoomService.allAvailableClassRooms$;
  classLevels$: Observable<any[]> = this.classLevelsService.all$;
  weekDays$: Observable<any[]> = this.timeTableService.daysOfTheWeek$;
  streams$: Observable<any[]> = this.streamsService.all$;
  timings$: Observable<any[]> = this.params$.pipe(
    mergeMap(params => this.timeTableService.getTimetableTimingsWith(params))
  );

  timeTableLessons$: Observable<any[]> = combineLatest([
    this.timetableRawLessons$,
    this.teachers$,
    this.units$,
    this.rooms$,
    this.classLevels$,
    this.streams$,
    this.weekDays$,
    this.timings$
  ]).pipe(
    map(([timetableRawLessons, teachers, units, _rooms, classLevels, streams, weekDays, timings]) => timetableRawLessons.map(item => {
      const teacher = teachers.find(({id}) => id === item.teacherId);
      const unit = units.find(({id}) => id === item.subjectId);
      const weekDay = weekDays.find(({id}) => id === item.dayOfWeekId);
      const stream = streams.find(({id}) => id === item.streamId);
      const timing = timings.find(({id}) => id === item.timeId);
      const classLevel = classLevels.find(({id}) => id === item.classLevelId);
      return {
        ...item,
        teacherName: teacher.firstName + ' ' + teacher.lastName,
        subjectName: unit.abbreviation,
        dayOfWeekName: weekDay.abbreviation,
        classLevelName: classLevel.abbreviation,
        streamName: stream.abbreviation,
        timeValue: timing.start + ' - ' + timing.end
      };
    })),
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
    private store: Store,
    private teacherService: TeacherService,
    private unitsService: UnitsService,
    private schoolRoomService: SchoolRoomService,
    private classLevelsService: ClassLevelService,
    private streamsService: ClassStreamService
  ) {
  }

}
