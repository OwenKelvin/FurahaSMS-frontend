import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GuardiansService } from 'src/app/services/guardians.service';
import { loadGuardianProfiles } from '../store/actions/guardian-profile.actions';

@Component({
  selector: 'app-view-guardian',
  templateUrl: './view-guardian.component.html',
  styleUrls: ['./view-guardian.component.css']
})
export class ViewGuardianComponent implements OnInit, OnDestroy {
  guardianProfile$: Observable<any>;
  componentIsActive: boolean;
  constructor(
    private guardianService: GuardiansService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.guardianProfile$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(mergeMap(id => this.guardianService.getGuardianWithId(id)));
    this.guardianProfile$
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(profile => this.store.dispatch(loadGuardianProfiles(profile)));
  }
  changeProfile($event: any) {
    console.log($event, 'Method Not Implemented');
  }
  ngOnDestroy() {
    this.componentIsActive = true;
  }
}
