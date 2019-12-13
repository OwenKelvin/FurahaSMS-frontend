import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicYearService } from 'src/app/services/academic-year.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-academic-year',
  templateUrl: './view-academic-year.component.html',
  styleUrls: ['./view-academic-year.component.css']
})
export class ViewAcademicYearComponent implements OnInit {

  academicYear$: Observable<any>;
  viewAcademicYearRouter: (id: any) => string;
  createAcademicYearRouter: string;
  constructor(
    private router: Router,
    private academicYearService: AcademicYearService,
    private store: Store<AppState>) { }

  ngOnInit() {
    const activatedRoute: ActivatedRoute = new ActivatedRoute();
    this.router.routerState.root.children[0].children[0].children[0].params.subscribe(item => {
      this.academicYear$ = this.academicYearService.get({ id: item.id, classLevels: 1 });
    });

    // if (
    //   this.router.routerState.root &&
    //   this.router.routerState.root.children &&
    //   this.router.routerState.root.children[0]
    // ) {

    // }
  }
}
