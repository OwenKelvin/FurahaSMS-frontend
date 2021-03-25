import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TimeTableService} from '../../services/time-table.service';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {AcademicYearService} from 'src/app/pages/academics/services/academic-year.service';
import {Observable, combineLatest, BehaviorSubject} from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {TeacherService} from 'src/app/pages/admissions/services/teacher.service';
import {UnitsService} from 'src/app/services/units.service';
import {SchoolRoomService} from 'src/app/pages/infrastructures/services/school-room.service';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {ClassStreamService} from 'src/app/pages/academics/services/class-stream.service';

@Component({
  selector: 'app-time-table-academic-year-edit',
  templateUrl: './time-table-academic-year-edit.component.html',
  styleUrls: ['./time-table-academic-year-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableAcademicYearEditComponent {


  academicYearId$: Observable<number> = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  timeTableId$: Observable<number> = this.route.paramMap.pipe(map(params => Number(params.get('id'))));
  teachers$ = this.teacherService.getActiveTeachers();
  units$ = this.unitsService.getAllActiveSubjects();
  rooms$ = this.schoolRoomService.allAvailableClassRooms$;
  classLevels$ = this.classLevelsService.all$;
  weekDays$ = this.timeTableService.daysOfTheWeek$;
  streams$ = this.streamsService.all$;
  modalRef: BsModalRef;
  isOpen: boolean[] = [false];
  editItem$ = new BehaviorSubject({classLevelName: null, streamName: null, timeValue: null, dayOfWeekName: null});

  params$ = combineLatest([this.academicYearId$, this.timeTableId$]).pipe(
    map(([academicYearId, timeTableId]: any[]) => ({academicYearId, timeTableId}))
  );

  timings$: Observable<any[]> = this.params$.pipe(
    mergeMap(params => this.timeTableService.getTimetableTimingsWith(params))
  );

  timetableLessons$: Observable<any[]> = this.params$.pipe(
    mergeMap(params => this.timeTableService.getLessonsFor(params)),
    tap(lessons => this.editedTimetableSubject$.next(lessons)),
  );


  activatedRouteParam$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))));
  academicYearName$ = this.academicYearId$?.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({id})),
    map(({name}) => name)
  );

  editedTimetableSubject$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  editedTimetable$: Observable<any[]> = this.editedTimetableSubject$.asObservable();


  editedTimetables$: Observable<any[]> = combineLatest([
    this.timings$,
    this.classLevels$,
    this.editedTimetable$,
    this.teachers$,
    this.units$,
    this.rooms$,
    this.streams$,
    this.weekDays$
  ]).pipe(
    map(([timings, classLevels, editedTimeTable, teachers, units, rooms, streams, weekDays]: any[]) => editedTimeTable.map((item: any) => {

        const classLevel = classLevels.find(({abbreviation, id}: any) => abbreviation === item.classLevelName || id === item.classLevelId);
        const teacher = teachers.find(({id}: any) => id === item.teacherId);
        const timing = timings.find(({start, end, id}: any) => start + ' - ' + end === item.timeValue || id === item.timeId);
        const stream = streams.find(({abbreviation, id}: any) => abbreviation === item.streamName || id === item.streamId);
        const weekDay = weekDays.find(({abbreviation, id}: any) => abbreviation === item.dayOfWeekName || id === item.dayOfWeekId);
        const unit = units.find(({id}: any) => id === item.subjectId);
        const room = rooms.find(({id}: any) => id === item.roomId);

        return {
          ...item,
          classLevelId: classLevel.id,
          classLevelName: classLevel.abbreviation,
          teacherId: teacher.id,
          teacherName: teacher.firstName + ' ' + teacher.lastName,
          timeId: timing.id,
          streamId: stream.id,
          streamName: stream.abbreviation,
          dayOfWeekId: weekDay.id,
          dayOfWeekName: weekDay.abbreviation,
          subjectName: unit.abbreviation,
          roomAbbr: room.abbreviation,
          roomId: room.id,
          timeValue: `${timing.start} - ${timing.end}`,
          subjectId: item.unit_id,
        };
      }))
  );

  timeTableForm$: Observable<any[]> = combineLatest([
    this.editedTimetables$,
    this.classLevels$,
    this.weekDays$,
    this.streams$,
    this.timings$

  ]).pipe(
    map(([timetableLessons, classLevels, weekDays, streams, timings]) => classLevels.map(classLevel => ({
          id: classLevel.id,
          name: `${classLevel.abbreviation}`,
          weekDays: weekDays.map(({abbreviation}) => abbreviation),
          timings: timings.map(({start, end}) => start + ' - ' + end),
          streams: streams.map(({abbreviation}) => abbreviation),
          values: timetableLessons,
          grouped: this.timeTableService.groupByDayOfWeek(timetableLessons.filter(
            ({classLevelId}) => classLevelId === classLevel.id
          ))

        })))
  );

  editItemDetails$ = combineLatest([this.editedTimetable$, this.editItem$]).pipe(
    map(([timetable, editItem]: [any[], any]) => {
      const filteredItems = timetable.filter(item => item.classLevelName === editItem.classLevelName &&
          item.dayOfWeekName === editItem.dayOfWeekName &&
          item.streamName === editItem.streamName &&
          item.timeValue === editItem.timeValue);
      if (filteredItems.length > 0) {
        return filteredItems[0];
      }
      return {

        timeValue: editItem.timeValue,
        dayOfWeekName: editItem.dayOfWeekName,
        classLevelName: editItem.classLevelName,
        streamName: editItem.streamName,
      };
    })
  );

  editLessonForm: FormGroup = this.fb.group({
    teacherId: [null, Validators.required],
    roomId: [null],
    subjectId: [null],
  });
  constructor(
    private academicYearService: AcademicYearService,
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private unitsService: UnitsService,
    private schoolRoomService: SchoolRoomService,
    private classLevelsService: ClassLevelService,
    private streamsService: ClassStreamService
  ) {
  }

  editLesson({template, classLevelName, stream: streamName, timing: timeValue, dayOfWeekName, lesson}: any) {
    const lessonValues = lesson?.[streamName]?.[timeValue];
    if (lessonValues) {
      this.editLessonForm.setValue({
        teacherId: lessonValues.teacherId,
        roomId: lessonValues.roomId,
        subjectId: lessonValues.subjectId
      });
    } else {
      this.editLessonForm.setValue({
        teacherId: null,
        roomId: null,
        subjectId: null
      });
    }
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
    this.editItem$.next({classLevelName, streamName, timeValue, dayOfWeekName});
  }

  saveLesson() {
    const editItem = this.editItem$.value;
    const timeTableItems = this.editedTimetableSubject$.value;
    const filteredItems = timeTableItems.filter(item => item.classLevelName === editItem.classLevelName &&
        item.dayOfWeekName === editItem.dayOfWeekName &&
        item.streamName === editItem.streamName &&
        item.timeValue === editItem.timeValue);
    if (filteredItems.length > 0) {
      timeTableItems[timeTableItems.indexOf(filteredItems[0])] = {
        ...timeTableItems[timeTableItems.indexOf(filteredItems[0])],
        ...this.editLessonForm.value
      };
      this.editedTimetableSubject$.next(timeTableItems);

    } else {
      this.editedTimetableSubject$.next([
        ...timeTableItems,
        {
          classLevelName: editItem.classLevelName,
          dayOfWeekName: editItem.dayOfWeekName,
          streamName: editItem.streamName,
          timeValue: editItem.timeValue,
          ...this.editLessonForm.value
        }
      ]);
    }
    this.modalRef.hide();
  }

  saveChanges() {
    combineLatest([
      this.editedTimetable$,
      this.params$
    ]).pipe(
      mergeMap(([editedTimetable, params]) =>
        this.timeTableService.saveLessonsFor({...params, data: editedTimetable})),
    ).subscribe();
  }

}
