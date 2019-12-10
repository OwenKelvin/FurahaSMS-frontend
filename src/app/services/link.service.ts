import { Injectable } from '@angular/core';
import { LinkInterface } from './../interfaces/link.interface';
import { Observable, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }
  getLinks(type): Observable<LinkInterface[]> {
    switch (type) {
      case 'admissions':
        return this.getAdmissionsLinks();
      default:
        return this.getDashboardLinks();
    }
  }
  getAdmissionsLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Student Admissions',
        icon: 'icon-user-plus',
        link: 'admissions/students'
      },
      {
        name: 'Teaching Staff Admissions',
        icon: 'icon-user-plus',
        link: 'admissions/staff/teachers'
      },
      {
        name: 'Support Staff Admissions',
        icon: 'icon-user-plus',
        link: 'admissions/staff/support'
      }
    ]);
  }
  getDashboardLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Admissions',
        icon: 'icon-user-plus',
        link: 'admissions'
      },
      {
        name: 'Library',
        icon: 'icon-library',
        link: 'library'
      },
      {
        name: 'Accounts',
        icon: 'icon-bank',
        link: 'accounts'
      },
      {
        name: 'Procuments',
        icon: 'icon-truck',
        link: 'procurements'
      },
      {
        name: 'Sports',
        icon: 'icon-tennis',
        link: 'sports'
      },
      {
        name: 'Management',
        icon: 'icon-flow-tree',
        link: 'school-management'
      },
      {
        name: 'Time Table',
        icon: 'icon-clock',
        link: 'time-table'
      },
      {
        name: 'Academics',
        icon: 'icon-book',
        link: 'academics'
      },
      {
        name: 'Reports',
        icon: 'icon-doc-text-inv',
        link: 'reports'
      }
    ]);
  }
  getAllLinks(): Observable<LinkInterface[]> {
    // const $forkJoined = forkJoin([this.getAdmissionsLinks(), this.getDashboardLinks()]);
    // return $forkJoined;
    return zip(this.getAdmissionsLinks(), this.getDashboardLinks())
      .pipe(map(x => x[0].concat(x[1])));
  }
}
