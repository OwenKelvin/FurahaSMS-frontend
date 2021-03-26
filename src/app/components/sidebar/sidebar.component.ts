import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subject, combineLatest} from 'rxjs';
import {AppState} from '../../store/reducers';
import {hideMenu, showMenu} from '../../store/actions/menu-toggle.actions';
import {selectShowMenu} from '../../store/selectors/menu-toggle.selector';
import {LinkInterface} from 'src/app/interfaces/link.interface';
import {LinkService} from 'src/app/services/link.service';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {map, filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isMenuClosed$: Observable<boolean>;
  listItems$: Observable<LinkInterface[]>;
  isMenuClosed: boolean;
  isClickedSubject$ = new Subject<boolean>();
  isSmallDevice$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(state => state.matches)
    );

  constructor(
    private store: Store<AppState>,
    private linkService: LinkService,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit() {
    this.isMenuClosed = true;
    this.isMenuClosed$ = this.store.select(selectShowMenu);
    this.isMenuClosed$.subscribe(isMenuClosed => {
      this.isMenuClosed = isMenuClosed;
    });
    this.listItems$ = this.linkService.dashboardLinks;

    combineLatest([
      this.isClickedSubject$,
      this.isSmallDevice$
    ]).pipe(
      filter(([clicked, isSmallDevice]) => clicked && isSmallDevice),
      tap(() => this.store.dispatch(showMenu())),
      tap(() => this.isClickedSubject$.next(false))
    ).subscribe();
  }

  toggleMenu(): void {
    if (this.isMenuClosed) {
      this.store.dispatch(hideMenu());
    } else {
      this.store.dispatch(showMenu());
    }
  }

  goto($event: MouseEvent, _b: any) {
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
  }

  handleLinkClick() {
    this.isClickedSubject$.next(true);
  }

}
