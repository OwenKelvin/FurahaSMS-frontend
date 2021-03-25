import {ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {MyProfileService} from 'src/app/pages/my-profile/services/my-profile.service';
import {BehaviorSubject, combineLatest, Observable, timer} from 'rxjs';
import {finalize, takeWhile, tap} from 'rxjs/operators';


@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserButtonComponent {

  @ViewChild('dropdown') dropDownMenu: ElementRef;
  isCollapsed = false;
  isCollapsedSubject$ = new BehaviorSubject<boolean>(false);
  isCollapsedAction$ = this.isCollapsedSubject$.asObservable();

  user$ = this.myProfileService.loadMyProfile$;
  constructor(
    private eRef: ElementRef,
    private myProfileService: MyProfileService
  ) {
  }

  @HostListener('document:click', ['$event'])
  clicked(event: any) {
    if (this.isCollapsed && !this.eRef.nativeElement.contains(event.target)) {
      this.toggleMenu();
    }
  }

  menuAnimator: () =>
    Observable<number> = () => timer(100, 10);

  toggleMenu() {
    const dropDownElement = this.dropDownMenu.nativeElement as HTMLDivElement;
    if (!this.isCollapsed) {
      dropDownElement.style.opacity = '0';
    }
    this.isCollapsedSubject$.next(!this.isCollapsed);
    combineLatest([
      this.isCollapsedAction$,
      this.menuAnimator()
    ]).pipe(
      tap(([isCollapsed, counter]) => {

        if (isCollapsed) {
          dropDownElement.style.opacity = String(counter / 50);
        } else {
          dropDownElement.style.opacity = String((50 - counter) / 50);
        }
      }),
      finalize(() => {
        this.isCollapsed = !this.isCollapsed;
      }),
      takeWhile((n) => n[1] < 50),
    ).subscribe();

  }
}
