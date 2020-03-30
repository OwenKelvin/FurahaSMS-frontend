import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { UnitsService } from 'src/app/services/units.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit, OnDestroy {
  unit$: Observable<any>;
  componentIsActive: boolean;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>, private unitService: UnitsService) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.route.paramMap
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(params => {
      this.unit$ = this.unitService.getUnitWithId(Number(params.get('id')));
    });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
