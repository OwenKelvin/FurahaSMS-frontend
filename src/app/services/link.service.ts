import { Injectable } from '@angular/core';
import { LinkInterface } from './../interfaces/link.interface';
import { Observable, of, zip, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectMyPermissions } from '../pages/my-profile/store/selectors/my-profile.selectors';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
  myPermissions$ = this.store.pipe(select(selectMyPermissions));
  filerAllowed = (links: LinkInterface[]): Observable<LinkInterface[]> =>
    combineLatest([this.myPermissions$, of(links)]).pipe(
      map(([myPermissions, links]) =>
        links.filter(link => myPermissions?.some(r => link.permissions?.includes(r)))
      )
    );
  dashboardLinks: Observable<LinkInterface[]> = this.filerAllowed([
    {
      name: 'Admissions',
      icon: 'icon-user-plus',
      link: 'admissions',
      permissions: [
        'view admissions',
        'access teacher admission',
        'view student admissions']
    },
    {
      name: 'Library',
      icon: 'icon-library',
      link: 'library',
      permissions: ['edit library book tag',
        'add library book tag',
        'add library book',
        'edit library book',
        'issue Library book',
        'mark library book returned',
        'access library admin',
        'access library account',
        'access library']
    },
    {
      name: 'Accounts',
      icon: 'icon-bank',
      link: 'accounts',
      permissions: ['access accounting'],
    },
    {
      name: 'Procuments',
      icon: 'icon-truck',
      link: 'procurements',
      permissions: [
        'make procurement request',
        'approve procurement request',
        'create procurement vendor',
        'create procurement tender',
        'create procurement bid'
      ]
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
      link: 'academics',
      permissions: [
        "access student academic reports",
        "upload curriculum content",
        "update curriculum content",
        "access academics",
        "view subject curriculum",
        "edit subject curriculum",
        "create subject curriculum",
        "access curriculum management",
        "view academic year",
        "create academic year",
        "access academic year",
        "access academic year management",
        "update curriculum system",
        "create curriculum system",
        "create e-learning course"]
    },
    {
      name: 'Roles & Permissions',
      icon: 'icon-block',
      link: 'roles-and-permissions',
      permissions: ['assign role', 'change role permissions']
    },
    {
      name: 'Reports',
      icon: 'icon-doc-text-inv',
      link: 'reports',
      permissions: [
        'view student scores reports',
        'access student academic reports',
        'access student list report',
        'access reports'
      ]
    }
  ]);

  constructor(private store: Store) { }
  getLinks({ type, id }: any): Observable<LinkInterface[]> {
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
        return this.dashboardLinks;
    }
  }

  get accountsLinks(): Observable<any> {
    return this.filerAllowed([
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
      {
        name: 'Admin',
        icon: 'icon-user-secret',
        link: 'accounts/admin'
      }
    ]);
  }

  get examBankLinks(): Observable<any> {
    return this.filerAllowed([
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

  getLibraryAdminBooksLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
      {
        name: 'Add Library Book',
        icon: 'icon-plus-squared',
        link: 'library/admin/books/create'
      },
    ]);
  }
  getLibraryAdminUsersLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
      {
        name: 'Add Library User',
        icon: 'icon-user-plus',
        link: 'library/admin/users/add'
      },
    ]);
  }

  getProcurementLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
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
    return this.filerAllowed([
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
    return this.filerAllowed([
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
    return this.filerAllowed([
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
    return this.filerAllowed([
      {
        name: 'Student Admissions',
        icon: 'icon-user-plus',
        link: 'admissions/students',
        permissions: ['create student', 'update student']
      },
      {
        name: 'Teaching Staff Admissions',
        icon: 'icon-user-plus',
        link: 'admissions/staff/teachers',
        permissions: ['create teacher', 'update teacher']
      },
      {
        name: 'Support Staff Admissions',
        icon: 'icon-user-plus',
        link: 'admissions/staff/support',
        permissions: ['create support staff']
      }
    ]);
  }
  getStudentAdmissionsLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
      {
        name: 'New Student',
        icon: 'icon-user-plus',
        link: 'admissions/students/create',
        permissions: ['create student']
      },
      {
        name: 'Edit Student Details',
        icon: 'icon-user-plus',
        link: 'admissions/students/edit',
        permissions: ['update student']
      }
    ]);
  }
  getTeachingStaffAdmissionsLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
      {
        name: 'New Teaching Staff',
        icon: 'icon-user-plus',
        link: 'admissions/staff/teachers/create',
        permissions: ['create teacher']
      },
      {
        name: 'Edit Student Details',
        icon: 'icon-pencil-1',
        link: 'admissions/staff/teachers/edit',
        permissions: ['update teacher']
      }
    ]);
  }
  getAcademicsLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
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
      {
        name: 'Study Materials',
        icon: 'icon-book-1',
        link: 'academics/study-materials'
      },
      {
        name: 'E-Learning',
        icon: 'icon-paper-plane-empty',
        link: 'academics/e-learning'
      },
    ]);
  }
  getAcademicYearsLinks(): Observable<LinkInterface[]> {
    return this.filerAllowed([
      {
        name: 'Create New',
        icon: 'icon-folder-open',
        link: 'academics/academic-year/create'
      },
      {
        name: 'View Archives',
        icon: 'icon-folder',
        link: 'academics/academic-year/archives'
      },
      {
        name: 'Subject/ Unit Allocations',
        icon: 'icon-sliders',
        link: 'academics/academic-year/subject-allocations'
      }
    ]);
  }
  getAcademicYearLinks($id: number): Observable<LinkInterface[]> {
    return this.filerAllowed([
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

    return zip(
      this.getAdmissionsLinks(),
      this.dashboardLinks,
      this.getAcademicYearsLinks(),
      this.getAdmissionsLinks(),
      this.getAcademicsLinks(),
      this.getLibraryLinks()
    )
      .pipe(map(x => x[0].concat(x[1])));
  }
}
