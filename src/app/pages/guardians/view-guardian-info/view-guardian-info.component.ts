import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap } from 'rxjs/operators';
import { selectGuardianProfileState } from '../store/selectors/guardian-profile.selectors';

@Component({
  selector: 'app-view-guardian-info',
  templateUrl: './view-guardian-info.component.html',
  styleUrls: ['./view-guardian-info.component.css']
})
export class ViewGuardianInfoComponent implements OnInit {
  guardianProfile$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.guardianProfile$ = (this.route.parent as ActivatedRoute).paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(
        mergeMap(id => this.store.pipe(select(selectGuardianProfileState))
            .pipe(
              map(guardianProfile => guardianProfile[id])
            ))
      );
  }

}
