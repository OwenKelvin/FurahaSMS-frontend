import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {TeacherSubjectService} from '../services/teacher-subject.service';
import {UnitsService} from '../../../services/units.service';
import {combineLatest, Observable} from 'rxjs';

@Component({
  selector: 'app-view-teacher-subjects',
  templateUrl: './view-teacher-subjects.component.html',
  styleUrls: ['./view-teacher-subjects.component.css']
})
export class ViewTeacherSubjectsComponent {

  teacherId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  teaches$: Observable<any[]> = this.teacherId$.pipe(
    mergeMap(id => this.teacherSubjectService.getSubjects(id))
  );
  units$ = this.unitsService.all$;
  teacherUnits$ = combineLatest([this.teaches$, this.units$]).pipe(
    tap(([teaches, units]) => {
      console.log({teaches, units});
    }),
    map(
      ([teaches, units]) =>
        units.filter(({id}) =>
          teaches.map(({unit_id: unitId}) => unitId).includes(id)
        ).map(item => ({
            id: item.id,
            name: item.name,
            abbr: item.abbreviation,
            levels: teaches.filter(({unit_id: unitId}) => unitId === item.id)
          })
        )
    )
  );

  constructor(
    private route: ActivatedRoute,
    private teacherSubjectService: TeacherSubjectService,
    private unitsService: UnitsService
  ) {
  }
}
