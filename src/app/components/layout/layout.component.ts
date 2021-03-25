import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectShowMenu} from '../../store/selectors/menu-toggle.selector';
import {AppState} from '../../store/reducers';
import {Observable} from 'rxjs';
import {routerTransition} from './route.animation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [routerTransition],
})
export class LayoutComponent implements OnInit {
  isMenuOpen$: Observable<boolean>;
  routerActivated = false;
  constructor(private store: Store<AppState>) {
  }

  closeFullScreenMode = (): void => {
    document.exitFullscreen().then();
  };

  ngOnInit() {
    this.isMenuOpen$ = this.store.select(selectShowMenu);
  }

  getState(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet?.component;
    }
    return null;
  }

}
