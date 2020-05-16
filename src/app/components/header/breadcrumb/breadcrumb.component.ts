import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, NavigationStart, NavigationCancel } from '@angular/router';
import { filter, takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';

interface BreadcrumbInterface {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  public breadcrumbs: BreadcrumbInterface[];

  showSpinner: boolean;
  componentIsActive: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.componentIsActive = true;
    this.breadcrumbs = this.getBreadcrumbs(this.router.routerState.root);
    // const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    this.router.events.pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
        this.showSpinner = false;
        const root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(() => {
        this.showSpinner = true;
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute, url: string = '',
    breadcrumbs: BreadcrumbInterface[] = []): BreadcrumbInterface[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeURL}`;

      const breadcrumb: BreadcrumbInterface = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };
      if (breadcrumb.label) {
        breadcrumbs.push(breadcrumb);
      }
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return [];
  }
  backClicked() {
    this.location.back();
  }
  goFullScreen() {
    (document.querySelector('#main') as HTMLElement).requestFullscreen();
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
