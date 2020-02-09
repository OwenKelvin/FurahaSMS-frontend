import { Injectable } from '@angular/core';
import { LinkInterface } from './../interfaces/link.interface';
import { Observable, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }
  getLinks({ type, id }): Observable<LinkInterface[]> {
    switch (type) {
      case 'academics':
        return this.getAcademicsLinks();
      case 'admissions':
        return this.getAdmissionsLinks();
      case 'admissions:students':
        return this.getStudentAdmissionsLinks();
      case 'academics:academic-years':
        return this.getAcademicYearsLinks();
      case 'academic-year':
        return this.getAcademicYearLinks(id);
      case 'library':
        return this.getLibraryLinks();
      case 'academics:curriculum':
        return this.getAcademicCurriculumLinks();
      case 'library:admin':
        return this.getLibraryAdminLinks();
      case 'procurements':
        return this.getProcurementLinks();
      case 'library:admin:books':
        return this.getLibraryAdminBooksLinks();
      case 'library:admin:users':
        return this.getLibraryAdminUsersLinks();
      case 'admissions:teaching-staff':
        return this.getTeachingStaffAdmissionsLinks();
      case 'exam:bank':
        return this.examBankLinks;
      case 'accounts':
        return this.accountsLinks;
      default:
        return this.getDashboardLinks();
    }
  }

  get accountsLinks(): Observable<any> {
    return of([
      {
        name: 'Financial Plan',
        icon: 'icon-edit-1',
        link: 'accounts/financial-plan'
      },
      {
        name: 'Student Fee Payment',
        icon: 'icon-dollar',
        link: 'accounts/student-fee-payment'
      },
    ]);
  }

  get examBankLinks(): Observable<any> {
    return of([
      {
        name: 'Past Exams',
        icon: 'icon-folder-open',
        link: 'academics/exam-bank/archives'
      },
      {
        name: 'Admin',
        icon: 'icon-user-secret',
        link: 'academics/exam-bank/admin'
      },
    ]);
  }

  getLibraryAdminBooksLinks(): Observable<LinkInterface[]>  {
    return of([
      {
        name: 'Add Library Book',
        icon: ' icon-plus-squared',
        link: 'library/admin/books/create'
      },
    ]);
  }
  getLibraryAdminUsersLinks(): Observable<LinkInterface[]>  {
    return of([
      {
        name: 'Add Library User',
        icon: 'icon-user-plus',
        link: 'library/admin/users/add'
      },
    ]);
  }

  getProcurementLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'My Requests',
        icon: 'icon-user',
        link: 'procurements/my-requests'
      },
      {
        name: 'Request items',
        icon: 'icon-basket',
        link: 'procurements/request'
      },
      {
        name: 'Pending Approval',
        icon: 'icon-ok-1',
        link: 'procurements/requests/approve'
      },
      {
        name: 'Vendors',
        icon: 'icon-truck-1',
        link: 'procurements/vendors'
      },
      {
        name: 'Tender',
        icon: 'icon-cart-plus',
        link: 'procurements/tender',
      },
      {
        name: 'Bids',
        icon: 'icon-chat',
        link: 'procurements/tenders/bids',
      },
      {
        name: 'Awarded Tenders',
        icon: 'icon-fire-1',
        link: 'procurements/tenders/awarded',
      }

    ]);
  }
  getLibraryAdminLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Users Management',
        icon: 'icon-users-1',
        link: 'library/admin/users'
      },
      {
        name: 'Books Management',
        icon: 'icon-book',
        link: 'library/admin/books'
      },
      {
        name: 'Authors Management',
        icon: 'icon-pencil',
        link: 'library/admin/authors'
      },
      {
        name: 'Publishers Management',
        icon: 'icon-library',
        link: 'library/admin/publishers'
      },
      {
        name: 'Tags Management',
        icon: 'icon-tag',
        link: 'library/admin/tags'
      }
    ]);
  }
  getAcademicCurriculumLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Subject Categories',
        icon: 'icon-docs',
        link: 'academics/curriculum/unit-categories'
      },
      {
        name: 'Subject Units',
        icon: 'icon-docs',
        link: 'academics/curriculum/units'
      },
      {
        name: 'Class Level Categories',
        icon: 'icon-docs',
        link: 'academics/curriculum/class-level-categories'
      },
      {
        name: 'Class Levels',
        icon: 'icon-docs',
        link: 'academics/curriculum/class-levels'
      },
      {
        name: 'Semester/ Terms',
        icon: 'icon-docs',
        link: 'academics/curriculum/semesters'
      },
    ]);
  }
  getLibraryLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Search Catalogue',
        icon: 'icon-search',
        link: 'library/search-catalogue'
      }, {
        name: 'My Account',
        icon: 'icon-user-circle-o',
        link: 'library/my-account'
      }, {
        name: 'Admin',
        icon: 'icon-user-secret',
        link: 'library/admin'
      }
    ]);
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
        name: 'New Student',
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
  getTeachingStaffAdmissionsLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'New Teaching Staff',
        icon: 'icon-user-plus',
        link: 'admissions/staff/teachers/create'
      },
      {
        name: 'Edit Student Details',
        icon: 'icon-pencil-1',
        link: 'admissions/staff/teachers/edit'
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
        icon: 'icon-calendar',
        link: 'academics/academic-year'
      },
      {
        name: 'Curriculum',
        icon: 'icon-book',
        link: 'academics/curriculum'
      },
      {
        name: 'Exam Bank',
        icon: 'icon-balance-scale',
        link: 'academics/exam-bank'
      },
    ]);
  }
  getAcademicYearsLinks(): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Create New',
        icon: 'icon-folder-open',
        link: 'academics/academic-year/create'
      },
      {
        name: 'View Archives',
        icon: ' icon-folder',
        link: 'academics/academic-year/archives'
      },
      {
        name: 'Subject/ Unit Allocations',
        icon: 'icon-sliders',
        link: 'academics/academic-year/subject-allocations'
      }
    ]);
  }
  getAcademicYearLinks($id): Observable<LinkInterface[]> {
    return of([
      {
        name: 'Financial Plan',
        icon: 'icon-dollar',
        link: `academics/academic-year/${$id}/financial-plan`
      },
      {
        name: 'Subjects/ Units',
        icon: 'icon-user-plus',
        link: `academics/academic-year/${$id}/units`
      },
    ]);
  }
  getAllLinks(): Observable<LinkInterface[]> {
    // const $forkJoined = forkJoin([this.getAdmissionsLinks(), this.getDashboardLinks()]);
    // return $forkJoined;
    return zip(
      this.getAdmissionsLinks(),
      this.getDashboardLinks(),
      this.getAcademicYearsLinks(),
      this.getAdmissionsLinks(),
      this.getAcademicsLinks(),
      this.getLibraryLinks()
    )
      .pipe(map(x => x[0].concat(x[1])));
  }
}
