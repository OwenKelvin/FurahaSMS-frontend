import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-view-unit-category',
  templateUrl: './view-unit-category.component.html',
  styleUrls: ['./view-unit-category.component.css']
})
export class ViewUnitCategoryComponent implements OnInit, OnDestroy {
  unitCategory$: Observable<any>;
  componentIsActive: boolean;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>, private unitCategoryService: UnitCategoryService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(params => {
       this.unitCategory$ = this.unitCategoryService.getUnitCategoryWithId(Number(params.get('id')));
    });

  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
