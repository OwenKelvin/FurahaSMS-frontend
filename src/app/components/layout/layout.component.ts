import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShowMenu } from './../../store/selectors/menu-toggle.selector';
import { AppState } from './../../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isMenuOpen$: Observable<boolean>;
  closeFullScreenMode = (): void => {
    document.exitFullscreen();
  }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isMenuOpen$ = this.store.select(selectShowMenu);
  }

}
