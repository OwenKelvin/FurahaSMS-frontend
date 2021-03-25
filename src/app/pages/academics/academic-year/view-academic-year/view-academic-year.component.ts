import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';
import { loadActivePagesSuccess } from 'src/app/store/actions/active-page.actions';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-academic-year',
  templateUrl: './view-academic-year.component.html',
  styleUrls: ['./view-academic-year.component.css']
})
export class ViewAcademicYearComponent implements OnInit, OnDestroy {
  academicYearId$: Observable<any>;
  academicYear$: Observable<any>;
  viewAcademicYearRouter: (id: any) => string;
  createAcademicYearRouter: string;
  componentIsActive: boolean;
  constructor(
    private academicYearService: AcademicYearService,
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.componentIsActive = true;

    this.academicYearId$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))));
    this.academicYear$ = this.academicYearId$
      .pipe(tap(id => {
        this.store.dispatch(loadActivePagesSuccess({
          id
        }));
      }))
      .pipe(mergeMap(id => this.academicYearService.get({ id, classLevels: 1 })));

    // const activatedRoute: ActivatedRoute = this.router.routerState.root.firstChild.firstChild.firstChild;
    // if (activatedRoute.firstChild.children.length === 0) {
    //   this.academicYearId$ = activatedRoute.params;
    // } else {
    //   this.academicYearId$ = activatedRoute.firstChild.params;
    // }
    // this.academicYearId$
    //   .pipe(takeWhile(() => this.componentIsActive))
    //   .subscribe(item => {
    //   if (item.id) {
    //     this.academicYear$ = this.academicYearService.get({ id: item.id, classLevels: 1 });
    //     this.store.dispatch(loadActivePagesSuccess({
    //       id: item.id
    //     }));
    //   }

    // });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
