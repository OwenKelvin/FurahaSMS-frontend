import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, takeWhile, map } from 'rxjs/operators';
@Component({
  selector: 'app-skip-link',
  styleUrls: ['./skip-link.component.css'],
  template: `<a [href]="skipLinkPath" class="skip-main">Skip to main content</a>
  `
})
export class SkipLinkComponent implements OnInit, OnDestroy {
  skipLinkPath: string;
  componentIsActive: boolean;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.componentIsActive = true;
    this.skipLinkPath = `${this.router.url.replace('#main', '')}#main`;
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .pipe(takeWhile(() => this.componentIsActive))
      .pipe(map(event => (event as any).url ))
      .subscribe(url => {
        if (!/(.)#main$/.test(url)) {
          this.skipLinkPath = `${url}#main`;
        }

      });
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
