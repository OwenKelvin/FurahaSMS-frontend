import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers } from 'src/app/store/reducers';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GuardiansService } from 'src/app/services/guardians.service';
import { loadGuardianProfiles } from '../store/actions/guardian-profile.actions';

@Component({
  selector: 'app-view-guardian',
  templateUrl: './view-guardian.component.html',
  styleUrls: ['./view-guardian.component.css']
})
export class ViewGuardianComponent implements OnInit {
  guardianProfile$: Observable<any>;
  constructor(
    private guardianService: GuardiansService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.guardianProfile$ = this.route.paramMap
      .pipe(map(params => +params.get('id')))
      .pipe(mergeMap(id => this.guardianService.getGuardianWithId(id)));
    this.guardianProfile$.subscribe(profile => this.store.dispatch(loadGuardianProfiles(profile)));
  }

}
