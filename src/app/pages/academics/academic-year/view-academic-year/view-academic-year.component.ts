import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';
import { loadActivePagesSuccess } from 'src/app/store/actions/active-page.actions';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';

@Component({
  selector: 'app-view-academic-year',
  templateUrl: './view-academic-year.component.html',
  styleUrls: ['./view-academic-year.component.css']
})
export class ViewAcademicYearComponent implements OnInit {
  academicYearId$: Observable<any>;
  academicYear$: Observable<any>;
  viewAcademicYearRouter: (id: any) => string;
  createAcademicYearRouter: string;
  constructor(
    private router: Router,
    private academicYearService: AcademicYearService,
    private store: Store<AppState>) { }

  ngOnInit() {
    const activatedRoute: ActivatedRoute = this.router.routerState.root.firstChild.firstChild.firstChild;
    if (activatedRoute.firstChild.children.length === 0) {
      this.academicYearId$ = activatedRoute.params;
    } else {
      this.academicYearId$ = activatedRoute.firstChild.params;
    }
    this.academicYearId$.subscribe(item => {
      if (item.id) {
        this.academicYear$ = this.academicYearService.get({ id: item.id, classLevels: 1 });
        this.store.dispatch(loadActivePagesSuccess({
          id: item.id
        }));
      }

    });
  }
}
