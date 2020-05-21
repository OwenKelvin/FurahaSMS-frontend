import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  getForAcademicYear(_id: number): Observable<any[]> {
    return of([
      {
        timeId: 1,
        timeValue: '08:00:00 - 09:00:00',
        streamId: 1,
        streamName: 'R',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R'
      },
      {
        timeId: 2,
        timeValue: '09:00:00 - 10:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R',
        streamId: 1,
        streamName: 'R',
      },
      {
        timeId: 3,
        timeValue: '11:00:00 - 12:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R',
        streamId: 1,
        streamName: 'R',
      },
      {
        timeId: 1,
        timeValue: '08:00:00 - 09:00:00',
        streamId: 2,
        streamName: 'B',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R'
      },
      {
        timeId: 2,
        timeValue: '09:00:00 - 10:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 2,
        roomAbbr: 'PP1 B',
        streamId: 2,
        streamName: 'B',
      },
      {
        timeId: 3,
        timeValue: '11:00:00 - 12:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 2,
        roomAbbr: 'PP1 B',
        streamId: 2,
        streamName: 'B',
      },
      
      {
        timeId: 1,
        timeValue: '08:00:00 - 09:00:00',
        streamId: 1,
        streamName: 'R',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 2,
        dayOfWeekName: 'Tuesday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R'
      },
      {
        timeId: 2,
        timeValue: '09:00:00 - 10:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 2,
        dayOfWeekName: 'Tuesday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R',
        streamId: 1,
        streamName: 'R',
      },
      {
        timeId: 3,
        timeValue: '11:00:00 - 12:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 2,
        dayOfWeekName: 'Tuesday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R',
        streamId: 1,
        streamName: 'R',
      },
      {
        timeId: 1,
        timeValue: '08:00:00 - 09:00:00',
        streamId: 2,
        streamName: 'B',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 2,
        dayOfWeekName: 'Tuesday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 1,
        roomAbbr: 'PP1 R'
      },
      {
        timeId: 2,
        timeValue: '09:00:00 - 10:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 2,
        dayOfWeekName: 'Tuesday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 2,
        roomAbbr: 'PP1 B',
        streamId: 2,
        streamName: 'B',
      },
      {
        timeId: 3,
        timeValue: '11:00:00 - 12:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 2,
        dayOfWeekName: 'Tuesday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 1,
        classLevelName: 'PP1',
        roomId: 2,
        roomAbbr: 'PP1 B',
        streamId: 2,
        streamName: 'B',
      },
      
      {
        timeId: 1,
        timeValue: '08:00:00 - 09:00:00',
        streamId: 1,
        streamName: 'R',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 2,
        classLevelName: 'PP2',
        roomId: 1,
        roomAbbr: 'PP1 R'
      },
      {
        timeId: 2,
        timeValue: '09:00:00 - 10:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 2,
        classLevelName: 'PP2',
        roomId: 1,
        roomAbbr: 'PP1 R',
        streamId: 1,
        streamName: 'R',
      },
      {
        timeId: 3,
        timeValue: '11:00:00 - 12:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 2,
        classLevelName: 'PP2',
        roomId: 1,
        roomAbbr: 'PP1 R',
        streamId: 1,
        streamName: 'R',
      },
      {
        timeId: 1,
        timeValue: '08:00:00 - 09:00:00',
        streamId: 2,
        streamName: 'B',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 2,
        classLevelName: 'PP2',
        roomId: 1,
        roomAbbr: 'PP1 R'
      },
      {
        timeId: 2,
        timeValue: '09:00:00 - 10:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 2,
        classLevelName: 'PP2',
        roomId: 2,
        roomAbbr: 'PP1 B',
        streamId: 2,
        streamName: 'B',
      },
      {
        timeId: 3,
        timeValue: '11:00:00 - 12:00:00',
        teacherId: 1,
        teacherName: 'Mr Johnson Kamau',
        dayOfWeekId: 1,
        dayOfWeekName: 'Monday',
        subjectId: 1,
        subjectName: 'LA',
        classLevelId: 2 ,
        classLevelName: 'PP2',
        roomId: 2,
        roomAbbr: 'PP1 B',
        streamId: 2,
        streamName: 'B',
      },
    ]);
  }

  constructor() { }
}
