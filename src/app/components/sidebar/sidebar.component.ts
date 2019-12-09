import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../store/reducers';
import { loadMenuTogglesFailure, loadMenuTogglesSuccess } from './../../store/actions/menu-toggle.actions';
import { selectShowMenu } from './../../store/selectors/menu-toggle.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isMenuClosed$: Observable<boolean>;
  isMenuClosed: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isMenuClosed = true;
    this.isMenuClosed$ = this.store.select(selectShowMenu);
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

}
