import {Injectable} from '@angular/core';
import {LinkInterface} from './../interfaces/link.interface';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectMyPermissions, selectMyRoles} from '../pages/my-profile/store/selectors/my-profile.selectors';
import * as fromLinks from '../store/selectors/permissions.selectors';


@Injectable({
  providedIn: 'root'
})
export class LinkService {

  myPermissions$ = this.store.pipe(select(selectMyPermissions));
  myRoles$ = this.store.pipe(select(selectMyRoles));

  dashboardLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectDashdoardLinks));
  accountsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAccountsLinks));
  examBankLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectexamBankLinks));
  libraryAdminBooksLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryAdminBooksLinks));
  academicsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAcademicsLinks));
  admissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAdmissionsLinks));
  studentAdmissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectStudentAdmissionsLinks));
  academicYearsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAcademicYearsLinks));
  libraryLinks: Observable<LinkInterface[]>
    = this.filerAllowed(this.store.select(fromLinks.selectLibraryLinks));
  academicCurriculumLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectAcademicCurriculumLinks));
  libraryAdminLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryAdminLinks));
  procurementLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectProcurementLinks));
  libraryAdminUsersLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectLibraryAdminUsersLinks));
  teachingStaffAdmissionsLinks: Observable<LinkInterface[]>
    = this.filerAllowed(this.store.select(fromLinks.selectTeachingStaffAdmissionsLinks));
  timeTableLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.selectTimeTableLinks));
  rolesAndPermissionsLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.rolesAndPermissionsLinks));
  allLinks: Observable<LinkInterface[]> = this.filerAllowed(this.store.select(fromLinks.allLinks));

  constructor(private store: Store) {
  }

  filerAllowed(links$: Observable<LinkInterface[]>): Observable<LinkInterface[]> {
    return combineLatest([this.myPermissions$, this.myRoles$, links$]).pipe(
      map(([myPermissions, myRoles, links]) =>
        links?.filter(link => myRoles?.includes('super admin') || myPermissions?.some(r => link.permissions?.includes(r)))
      )
    );

  }

  academicYearLinks(id: any): Observable<LinkInterface[]> {
    return this.filerAllowed(this.store.select(fromLinks.selectAcademicYearsLinks)).pipe(
      map(res => res.map(item => ({...item, link: item.link?.replace(':id', id)})))
    );

  }

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
}
