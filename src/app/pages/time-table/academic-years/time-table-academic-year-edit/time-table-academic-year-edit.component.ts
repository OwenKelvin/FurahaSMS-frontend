import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/pages/admissions/services/teacher.service';
import { UnitsService } from 'src/app/services/units.service';
import { SchoolRoomService } from 'src/app/pages/infrastructures/services/school-room.service';

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
    mergeMap(id => this.timeTableService.getForAcademicYear(id)),
    tap(values => console.log(values))
  );
  editItem$ = new BehaviorSubject({ classLevelName: null, streamName: null, timeValue: null, dayOfWeekName: null });
  editItemDetails$ = combineLatest([this.timetable$, this.editItem$]).pipe(
    map(([timetable, editItem]: [any[], any]) => {
      const filteredItems = timetable.filter(item => {
        return item.classLevelName === editItem.classLevelName &&
          item.dayOfWeekName === editItem.dayOfWeekName &&
          item.streamName === editItem.streamName &&
          item.timeValue === editItem.timeValue;
      });
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
  modalRef: any;


  constructor(
    private academicYearService: AcademicYearService,
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private unitsService: UnitsService,
    private schoolRoomService: SchoolRoomService
  ) { }
  
  teachers$ = this.teacherService.getActiveTeachers();
  units$ = this.unitsService.getAllActiveSubjects();
  rooms$ = this.schoolRoomService.allAvailableClassRooms$;

  editLesson({ template, classLevelName, stream: streamName, timing: timeValue, dayOfWeekName }: any) {
    this.editLessonForm.setValue({ teacherId: null, roomId: null, subjectId: null});
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
    this.editItem$.next({ classLevelName, streamName, timeValue, dayOfWeekName });
  }
  editLessonForm: FormGroup = this.fb.group({
    teacherId: [null, Validators.required],
    roomId: [null],
    subjectId: [null],
  })

}
