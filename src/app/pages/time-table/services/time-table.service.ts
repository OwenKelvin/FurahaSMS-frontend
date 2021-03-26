import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {shareReplay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  daysOfTheWeek$: Observable<any[]> = this.http.get<any[]>(`api/time-table/week-days`).pipe(
    shareReplay()
  );
  constructor(private http: HttpClient) {
  }

  saveLessonsFor({academicYearId, timeTableId, data}: { academicYearId: number; timeTableId: number; data: any }) {
    return this.http.post(`api/academic-year/${academicYearId}/time-tables/${timeTableId}/lessons`, data);
  }

  createForAcademicYear(id: number, data: any): any {
    return this.http.post(`api/academic-year/${id}/time-tables`, data);
  }

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

  getTimetableWith({academicYearId, timeTableId}: { academicYearId: number; timeTableId: number }) {
    const url = `api/academic-year/${academicYearId}/time-tables/${timeTableId}`;
    return this.http.get<any[]>(url);
  }

  getTimetableTimingsWith({academicYearId, timeTableId}: { academicYearId: number; timeTableId: number }) {

    const url = `api/academic-year/${academicYearId}/time-tables/${timeTableId}/timings`;
    return this.http.get<any[]>(url).pipe(
      shareReplay()
    );
  }

  getLessonsFor({academicYearId, timeTableId}: { academicYearId: number; timeTableId: number }) {
    const url = `api/academic-year/${academicYearId}/time-tables/${timeTableId}/lessons`;
    return this.http.get<any[]>(url).pipe(
      map(res => res.map(
        item => ({
          ...item,
          timeId: item.time_table_timing_id,
          streamId: item.stream_id,
          teacherId: item.teacher_id,
          dayOfWeekId: item.week_day_id,
          subjectId: item.unit_id,
          classLevelId: item.class_level_id,
          roomId: item.room_id,
        })
      ))
    );
  }

  getForAcademicYear(id: number): Observable<any[]> {
    return this.http.get<any[]>(`api/academic-year/${id}/time-tables`);
  }
}
