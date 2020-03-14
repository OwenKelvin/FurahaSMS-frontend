import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../store/reducers';
import { loadMenuTogglesFailure, loadMenuTogglesSuccess } from './../../store/actions/menu-toggle.actions';
import { selectShowMenu } from './../../store/selectors/menu-toggle.selector';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuClosed$: Observable<boolean>;
  isMenuClosed: boolean;
  componentIsActive: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.isMenuClosed = true;
    this.isMenuClosed$ = this.store.select(selectShowMenu)
      .pipe(takeWhile(() => this.componentIsActive));
    this.isMenuClosed$.subscribe(isMenuClosed => {
      this.isMenuClosed = isMenuClosed;
    });
    
  }
  toggleMenu(): void {
    if (this.isMenuClosed) {
      this.store.dispatch(loadMenuTogglesFailure());
    } else {
      this.store.dispatch(loadMenuTogglesSuccess());
    }
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
