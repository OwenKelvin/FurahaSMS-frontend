import { Injectable } from '@angular/core';
import { LinkInterface } from './../interfaces/link.interface';
import { Observable, of, zip, combineLatest } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectMyPermissions, selectMyRoles } from '../pages/my-profile/store/selectors/my-profile.selectors';
import * as fromLinks from '../store/selectors/permissions.selectors';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
  myPermissions$ = this.store.pipe(select(selectMyPermissions));
  myRoles$ = this.store.pipe(select(selectMyRoles));
  filerAllowed = (links$: Observable<LinkInterface[]>): Observable<LinkInterface[]> =>
    combineLatest([this.myPermissions$, this.myRoles$, links$]).pipe(
      map(([myPermissions, myRoles, links]) =>
        links.filter(link => myRoles?.includes('super admin') || myPermissions?.some(r => link.permissions?.includes(r)))
      )
    );

  dashboardLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectDashdoardLinks));
  accountsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAccountsLinks));
  examBankLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectexamBankLinks));
  libraryAdminBooksLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryAdminBooksLinks));
  academicsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAcademicsLinks))
  admissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAdmissionsLinks));
  studentAdmissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectStudentAdmissionsLinks));
  academicYearsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAcademicYearsLinks));
  libraryLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryLinks));;
  academicCurriculumLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAcademicCurriculumLinks));
  libraryAdminLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryAdminLinks));
  procurementLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectProcurementLinks));
  libraryAdminUsersLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryAdminUsersLinks));
  teachingStaffAdmissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectTeachingStaffAdmissionsLinks));
  timeTableLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectTimeTableLinks));
  rolesAndPermissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.rolesAndPermissionsLinks));


  constructor(private store: Store) { }
  getLinks({ type, id }: any): Observable<LinkInterface[]> {
    switch (type) {
      case 'academics':
        return this.academicsLinks;
      case 'admissions':
        return this.admissionsLinks;
      case 'admissions:students':
        return this.studentAdmissionsLinks;
      case 'academics:academic-years':
        return this.academicYearsLinks;
      case 'academic-year':
        return this.academicYearLinks(id);
      case 'library':
        return this.libraryLinks;
      case 'academics:curriculum':
        return this.academicCurriculumLinks;
      case 'library:admin':
        return this.libraryAdminLinks;
      case 'procurements':
        return this.procurementLinks;
      case 'library:admin:books':
        return this.libraryAdminBooksLinks;
      case 'library:admin:users':
        return this.libraryAdminUsersLinks;
      case 'admissions:teaching-staff':
        return this.teachingStaffAdmissionsLinks;
      case 'exam:bank':
        return this.examBankLinks;
      case 'accounts':
        return this.accountsLinks;
      default:
        return this.dashboardLinks;
    }
  }
  academicYearLinks(id: any): Observable<LinkInterface[]> {
    return this.filerAllowed(this.store.select(fromLinks.selectAcademicYearsLinks)).pipe(
      map(res => res.map(item => ({...item, link: item.link?.replace(':id', id)})))
    )
    
  }


  // getLibraryAdminBooksLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Add Library Book',
  //       icon: 'icon-plus-squared',
  //       link: 'library/admin/books/create'
  //     },
  //   ]);
  // }
  // getLibraryAdminUsersLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed();
  // }

  // getProcurementLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'My Requests',
  //       icon: 'icon-user',
  //       link: 'procurements/my-requests'
  //     },
  //     {
  //       name: 'Request items',
  //       icon: 'icon-basket',
  //       link: 'procurements/request'
  //     },
  //     {
  //       name: 'Pending Approval',
  //       icon: 'icon-ok-1',
  //       link: 'procurements/requests/approve'
  //     },
  //     {
  //       name: 'Vendors',
  //       icon: 'icon-truck-1',
  //       link: 'procurements/vendors'
  //     },
  //     {
  //       name: 'Tender',
  //       icon: 'icon-cart-plus',
  //       link: 'procurements/tender',
  //     },
  //     {
  //       name: 'Bids',
  //       icon: 'icon-chat',
  //       link: 'procurements/tenders/bids',
  //     },
  //     {
  //       name: 'Awarded Tenders',
  //       icon: 'icon-fire-1',
  //       link: 'procurements/tenders/awarded',
  //     }

  //   ]);
  // }
  // getLibraryAdminLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Users Management',
  //       icon: 'icon-users-1',
  //       link: 'library/admin/users'
  //     },
  //     {
  //       name: 'Books Management',
  //       icon: 'icon-book',
  //       link: 'library/admin/books'
  //     },
  //     {
  //       name: 'Authors Management',
  //       icon: 'icon-pencil',
  //       link: 'library/admin/authors'
  //     },
  //     {
  //       name: 'Publishers Management',
  //       icon: 'icon-library',
  //       link: 'library/admin/publishers'
  //     },
  //     {
  //       name: 'Tags Management',
  //       icon: 'icon-tag',
  //       link: 'library/admin/tags'
  //     }
  //   ]);
  // }
  // getAcademicCurriculumLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Subject Categories',
  //       icon: 'icon-docs',
  //       link: 'academics/curriculum/unit-categories'
  //     },
  //     {
  //       name: 'Subject Units',
  //       icon: 'icon-docs',
  //       link: 'academics/curriculum/units'
  //     },
  //     {
  //       name: 'Class Level Categories',
  //       icon: 'icon-docs',
  //       link: 'academics/curriculum/class-level-categories'
  //     },
  //     {
  //       name: 'Class Levels',
  //       icon: 'icon-docs',
  //       link: 'academics/curriculum/class-levels'
  //     },
  //     {
  //       name: 'Semester/ Terms',
  //       icon: 'icon-docs',
  //       link: 'academics/curriculum/semesters'
  //     },
  //   ]);
  // }
  // getLibraryLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Search Catalogue',
  //       icon: 'icon-search',
  //       link: 'library/search-catalogue'
  //     }, {
  //       name: 'My Account',
  //       icon: 'icon-user-circle-o',
  //       link: 'library/my-account'
  //     }, {
  //       name: 'Admin',
  //       icon: 'icon-user-secret',
  //       link: 'library/admin'
  //     }
  //   ]);
  // }
  // getAdmissionsLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Student Admissions',
  //       icon: 'icon-user-plus',
  //       link: 'admissions/students',
  //       permissions: ['create student', 'update student']
  //     },
  //     {
  //       name: 'Teaching Staff Admissions',
  //       icon: 'icon-user-plus',
  //       link: 'admissions/staff/teachers',
  //       permissions: ['create teacher', 'update teacher']
  //     },
  //     {
  //       name: 'Support Staff Admissions',
  //       icon: 'icon-user-plus',
  //       link: 'admissions/staff/support',
  //       permissions: ['create support staff']
  //     }
  //   ]);
  // }
  // getStudentAdmissionsLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'New Student',
  //       icon: 'icon-user-plus',
  //       link: 'admissions/students/create',
  //       permissions: ['create student']
  //     },
  //     {
  //       name: 'Edit Student Details',
  //       icon: 'icon-user-plus',
  //       link: 'admissions/students/edit',
  //       permissions: ['update student']
  //     }
  //   ]);
  // }
  // getTeachingStaffAdmissionsLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'New Teaching Staff',
  //       icon: 'icon-user-plus',
  //       link: 'admissions/staff/teachers/create',
  //       permissions: ['create teacher']
  //     },
  //     {
  //       name: 'Edit Student Details',
  //       icon: 'icon-pencil-1',
  //       link: 'admissions/staff/teachers/edit',
  //       permissions: ['update teacher']
  //     }
  //   ]);
  // }

  // getAcademicYearsLinks(): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Create New',
  //       icon: 'icon-folder-open',
  //       link: 'academics/academic-year/create'
  //     },
  //     {
  //       name: 'View Archives',
  //       icon: 'icon-folder',
  //       link: 'academics/academic-year/archives'
  //     },
  //     {
  //       name: 'Subject/ Unit Allocations',
  //       icon: 'icon-sliders',
  //       link: 'academics/academic-year/subject-allocations'
  //     }
  //   ]);
  // }
  // getAcademicYearLinks($id: number): Observable<LinkInterface[]> {
  //   return this.filerAllowed([
  //     {
  //       name: 'Financial Plan',
  //       icon: 'icon-dollar',
  //       link: `academics/academic-year/${$id}/financial-plan`
  //     },
  //     {
  //       name: 'Subjects/ Units',
  //       icon: 'icon-user-plus',
  //       link: `academics/academic-year/${$id}/units`
  //     },
  //   ]);
  // }
  getAllLinks(): Observable<LinkInterface[]> {

    return zip(
      this.admissionsLinks,
      this.dashboardLinks,
      this.academicYearsLinks,
      this.admissionsLinks,
      this.academicsLinks,
      this.libraryLinks
    )
      .pipe(map(x => x[0].concat(x[1])));
  }
}
