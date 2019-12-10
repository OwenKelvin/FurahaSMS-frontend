import { Injectable } from '@angular/core';
import { LinkInterface } from './../interfaces/link.interface';
import { Observable, of } from 'rxjs';

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
        link: 'page-under-maintenance'
      },
      {
        name: 'Accounts',
        icon: 'icon-bank',
        link: 'page-under-maintenance'
      },
      {
        name: 'Procuments',
        icon: 'icon-truck',
        link: 'page-under-maintenance'
      },
      {
        name: 'Sports',
        icon: 'icon-tennis',
        link: 'page-under-maintenance'
      },
      {
        name: 'Management',
        icon: 'icon-flow-tree',
        link: 'page-under-maintenance'
      },
      {
        name: 'Time Table',
        icon: 'icon-clock',
        link: 'page-under-maintenance'
      },
      {
        name: 'Academics',
        icon: 'icon-book',
        link: 'page-under-maintenance'
      },
      {
        name: 'Reports',
        icon: 'icon-doc-text-inv',
        link: 'page-under-maintenance'
      }
    ]);
  }
}
