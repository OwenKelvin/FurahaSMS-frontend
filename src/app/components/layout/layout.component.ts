import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShowMenu } from './../../store/selectors/menu-toggle.selector';
import { AppState } from './../../store/reducers';
import { Observable } from 'rxjs';
import { routerTransition } from './route.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [routerTransition],
})
export class LayoutComponent implements OnInit {
  isMenuOpen$: Observable<boolean>;
  
  routerActivated = false;
  closeFullScreenMode = (): void => {
    document.exitFullscreen();
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isMenuOpen$ = this.store.select(selectShowMenu);
  }
  
  onRouterOutletActivate($event: any) {
    console.log($event)
    this.routerActivated = true;
  }

  getState(outlet: any) {
    if (outlet.isActivated) {
      return outlet?.component;
    }
    return null
  }

}
