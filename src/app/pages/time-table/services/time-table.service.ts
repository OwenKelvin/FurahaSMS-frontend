import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  createForAcademicYear(id: number, data: any): any {
    return this.http.post(`api/academic-year/${id}/time-tables`, data);
  }

  daysOfTheWeek$: Observable<any[]> = this.http.get<any[]>(`api/time-table/week-days`).pipe(
    shareReplay()
  );

  groupByDayOfWeek(values: any[]) {

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

  getTimetableWith({ academicYearId, timeTableId }: { academicYearId: number, timeTableId: number; }) {
    const url = `api/academic-year/${academicYearId}/time-tables/${timeTableId}`;
    return this.http.get<any[]>(url);
  }

  getTimetableTimingsWith({ academicYearId, timeTableId }: { academicYearId: number, timeTableId: number; }) {
    
    const url = `api/academic-year/${academicYearId}/time-tables/${timeTableId}/timings`;
    return this.http.get<any[]>(url).pipe(
      shareReplay()
    );;
  }

  getLessonsFor({ academicYearId, timeTableId }: { academicYearId: number, timeTableId: number; }) {

    return of([{
      timeId: 1,
      timeValue: '08:00:00 - 08:40:00',
      streamId: 1,
      streamName: 'N',
      teacherId: 12,
      teacherName: 'Mr Johnson Kamau',
      dayOfWeekId: 1,
      dayOfWeekName: 'Mon',
      subjectId: 1,
      subjectName: 'LA',
      classLevelId: 1,
      classLevelName: 'PP1',
      roomId: 1,
      roomAbbr: 'PP1 R'
    }]);
    const url = `api/academic-year/${academicYearId}/time-tables/${timeTableId}/lessons`;
    return this.http.get<any[]>(url);
  }

  getForAcademicYear(id: number): Observable<any[]> {
    return this.http.get<any[]>(`api/academic-year/${id}/time-tables`);

    // return of([
    //   {
    //     timeId: 1,
    //     timeValue: '08:00:00 - 09:00:00',
    //     streamId: 1,
    //     streamName: 'R',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R'
    //   },
    //   {
    //     timeId: 2,
    //     timeValue: '09:00:00 - 10:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R',
    //     streamId: 1,
    //     streamName: 'R',
    //   },
    //   {
    //     timeId: 3,
    //     timeValue: '11:00:00 - 12:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R',
    //     streamId: 1,
    //     streamName: 'R',
    //   },
    //   {
    //     timeId: 1,
    //     timeValue: '08:00:00 - 09:00:00',
    //     streamId: 2,
    //     streamName: 'B',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R'
    //   },
    //   {
    //     timeId: 2,
    //     timeValue: '09:00:00 - 10:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 2,
    //     roomAbbr: 'PP1 B',
    //     streamId: 2,
    //     streamName: 'B',
    //   },
    //   {
    //     timeId: 3,
    //     timeValue: '11:00:00 - 12:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 2,
    //     roomAbbr: 'PP1 B',
    //     streamId: 2,
    //     streamName: 'B',
    //   },

    //   {
    //     timeId: 1,
    //     timeValue: '08:00:00 - 09:00:00',
    //     streamId: 1,
    //     streamName: 'R',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 2,
    //     dayOfWeekName: 'Tuesday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R'
    //   },
    //   {
    //     timeId: 2,
    //     timeValue: '09:00:00 - 10:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 2,
    //     dayOfWeekName: 'Tuesday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R',
    //     streamId: 1,
    //     streamName: 'R',
    //   },
    //   {
    //     timeId: 3,
    //     timeValue: '11:00:00 - 12:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 2,
    //     dayOfWeekName: 'Tuesday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R',
    //     streamId: 1,
    //     streamName: 'R',
    //   },
    //   {
    //     timeId: 1,
    //     timeValue: '08:00:00 - 09:00:00',
    //     streamId: 2,
    //     streamName: 'B',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 2,
    //     dayOfWeekName: 'Tuesday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R'
    //   },
    //   {
    //     timeId: 2,
    //     timeValue: '09:00:00 - 10:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 2,
    //     dayOfWeekName: 'Tuesday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 2,
    //     roomAbbr: 'PP1 B',
    //     streamId: 2,
    //     streamName: 'B',
    //   },
    //   {
    //     timeId: 3,
    //     timeValue: '11:00:00 - 12:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 2,
    //     dayOfWeekName: 'Tuesday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 1,
    //     classLevelName: 'PP1',
    //     roomId: 2,
    //     roomAbbr: 'PP1 B',
    //     streamId: 2,
    //     streamName: 'B',
    //   },

    //   {
    //     timeId: 1,
    //     timeValue: '08:00:00 - 09:00:00',
    //     streamId: 1,
    //     streamName: 'R',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 2,
    //     classLevelName: 'PP2',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R'
    //   },
    //   {
    //     timeId: 2,
    //     timeValue: '09:00:00 - 10:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 2,
    //     classLevelName: 'PP2',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R',
    //     streamId: 1,
    //     streamName: 'R',
    //   },
    //   {
    //     timeId: 3,
    //     timeValue: '11:00:00 - 12:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 2,
    //     classLevelName: 'PP2',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R',
    //     streamId: 1,
    //     streamName: 'R',
    //   },
    //   {
    //     timeId: 1,
    //     timeValue: '08:00:00 - 09:00:00',
    //     streamId: 2,
    //     streamName: 'B',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 2,
    //     classLevelName: 'PP2',
    //     roomId: 1,
    //     roomAbbr: 'PP1 R'
    //   },
    //   {
    //     timeId: 2,
    //     timeValue: '09:00:00 - 10:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 2,
    //     classLevelName: 'PP2',
    //     roomId: 2,
    //     roomAbbr: 'PP1 B',
    //     streamId: 2,
    //     streamName: 'B',
    //   },
    //   {
    //     timeId: 3,
    //     timeValue: '11:00:00 - 12:00:00',
    //     teacherId: 1,
    //     teacherName: 'Mr Johnson Kamau',
    //     dayOfWeekId: 1,
    //     dayOfWeekName: 'Monday',
    //     subjectId: 1,
    //     subjectName: 'LA',
    //     classLevelId: 2 ,
    //     classLevelName: 'PP2',
    //     roomId: 2,
    //     roomAbbr: 'PP1 B',
    //     streamId: 2,
    //     streamName: 'B',
    //   },
    // ]);
  }

  constructor(private http: HttpClient) { }
}
