import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
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
  teachers$ = this.teacherService.getActiveTeachers();
  units$ = this.unitsService.getAllActiveSubjects();
  rooms$ = this.schoolRoomService.allAvailableClassRooms$;
  isOpen: boolean[] = [true];
  activatedRouteParam$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))));
  academicYearName$ = this.activatedRouteParam$.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({ id })),
    map(({ name }) => name)
  );
  timetable$: Observable<any[]> = this.activatedRouteParam$.pipe(
    mergeMap(id => this.timeTableService.getForAcademicYear(id)),

  );
  editedTimetableSubject$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  editedTimetableAction$: Observable<any[]> = this.editedTimetableSubject$.asObservable();
  editedTimetable$ = combineLatest([this.editedTimetableAction$, this.teachers$, this.units$, this.rooms$]).pipe(

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

  editLesson({ template, classLevelName, stream: streamName, timing: timeValue, dayOfWeekName }: any) {
    this.editLessonForm.setValue({ teacherId: null, roomId: null, subjectId: null });
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg bg-dark text-light modal-container ');
    this.editItem$.next({ classLevelName, streamName, timeValue, dayOfWeekName });
  }
  editLessonForm: FormGroup = this.fb.group({
    teacherId: [null, Validators.required],
    roomId: [null],
    subjectId: [null],
  });

  saveLesson() {
    const editItem = this.editItem$.value;
    const filteredItems = this.editedTimetableSubject$.value.filter(item => {
      return item.classLevelName === editItem.classLevelName &&
        item.dayOfWeekName === editItem.dayOfWeekName &&
        item.streamName === editItem.streamName &&
        item.timeValue === editItem.timeValue;
    });
    if (filteredItems.length > 0) {
      alert(this.editedTimetableSubject$.value.indexOf(filteredItems[0]));
      
    } else {
      this.editedTimetableSubject$.next([
        ...this.editedTimetableSubject$.value,
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

}
