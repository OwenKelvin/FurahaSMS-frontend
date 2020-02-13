import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { UnitsService } from 'src/app/services/units.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {
  unit$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>, private unitService: UnitsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.unit$ = this.unitService.getUnitWithId(+params.get('id'));
    });
  }

}
