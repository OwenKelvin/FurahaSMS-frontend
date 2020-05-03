import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../store/reducers';
import { loadMenuTogglesFailure, loadMenuTogglesSuccess } from './../../store/actions/menu-toggle.actions';
import { selectShowMenu } from './../../store/selectors/menu-toggle.selector';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isMenuClosed$: Observable<boolean>;
  listItems$: Observable<LinkInterface[]>;
  isMenuClosed: boolean;

  constructor(private store: Store<AppState>, private linkService: LinkService) { }

  ngOnInit() {
    this.isMenuClosed = true;
    this.isMenuClosed$ = this.store.select(selectShowMenu);
    this.isMenuClosed$.subscribe(isMenuClosed => {
      this.isMenuClosed = isMenuClosed;
    });
    this.listItems$ = this.linkService.dashboardLinks;
  }
  toggleMenu(): void {
    if (this.isMenuClosed) {
      this.store.dispatch(loadMenuTogglesFailure());
    } else {
      this.store.dispatch(loadMenuTogglesSuccess());
    }
  }
  goto($event: MouseEvent) {
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
  }

}
