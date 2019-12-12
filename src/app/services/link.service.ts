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
      case 'academics':
        return this.getAcademicsLinks();
      case 'admissions':
        return this.getAdmissionsLinks();
      case 'admissions:students':
        return this.getStudentAdmissionsLinks();
      case 'academics:academic-year':
        return this.getAcademicYearLinks();
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
  getStudentAdmissionsLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'New Student Details',
        icon: 'icon-user-plus',
        link: 'admissions/students/create'
      },
      {
        name: 'Edit Student Details',
        icon: 'icon-user-plus',
        link: 'admissions/students/edit'
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
  getAcademicsLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Academic Year',
        icon: 'icon-user-plus',
        link: 'academics/academic-year'
      }
    ]);
  }
  getAcademicYearLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Create New',
        icon: 'icon-user-plus',
        link: 'academics/academic-year/create'
      },
      {
        name: 'View Archives',
        icon: 'icon-user-plus',
        link: 'academics/academic-year/archives'
      },
    ]);
  }
  getAllLinks(): Observable<LinkInterface[]> {
    // const $forkJoined = forkJoin([this.getAdmissionsLinks(), this.getDashboardLinks()]);
    // return $forkJoined;
    return zip(
      this.getAdmissionsLinks(),
      this.getDashboardLinks(),
      this.getAcademicYearLinks(),
      this.getAdmissionsLinks(),
      this.getAcademicsLinks()
    )
      .pipe(map(x => x[0].concat(x[1])));
  }
}
