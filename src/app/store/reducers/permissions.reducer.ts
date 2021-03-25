import { createReducer } from '@ngrx/store';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { dashboardLinks } from '../data-files/dashboard-links.data-file';
import { accountsLinks } from '../data-files/accounts-links.data-file';
import { examBankLinks } from '../data-files/exam-bank.data-file';
import { procurementLinks } from '../data-files/procurement.data-file';
import { academicCurriculumLinks } from '../data-files/academic-curriculum.data-file';


export const permissionsFeatureKey = 'permissions';

export interface State {
  [id: string]: LinkInterface[];
}


export const initialState: State = {
  dashboard: dashboardLinks,

  accounts: accountsLinks,

  examBank: examBankLinks,

  libraryAdminUsers: [
    {
      name: 'Add Library User', icon: 'icon-user-plus', link: 'library/admin/users/add', permissions: ['add library user']
    },
  ],

  libraryAdminBooks: [
    {
      name: 'Add Library Book', icon: 'icon-plus-squared', link: 'library/admin/books/create',
      permissions: ['edit library book', 'add library book']
    },
  ],

  procurement: procurementLinks,

  libraryAdmin: [
    {
      name: 'Users Management', icon: 'icon-users-1', link: 'library/admin/users',
      permissions: ['add library user', 'block library user', 'unblock library user']
    },
    {
      name: 'Books Management', icon: 'icon-book', link: 'library/admin/books',
      permissions: ['add library book', 'edit library book']
    },
    {
      name: 'Authors Management', icon: 'icon-pencil', link: 'library/admin/authors',
      permissions: ['add library book author', 'edit library book author']
    },
    {
      name: 'Publishers Management', icon: 'icon-library', link: 'library/admin/publishers',
      permissions: ['add library book publisher', 'edit library book publisher']
    },
    {
      name: 'Tags Management', icon: 'icon-tag', link: 'library/admin/tags',
      permissions: ['add library book tag', 'edit library book tag']
    }
  ],

  academicCurriculum: academicCurriculumLinks,

  library: [
    {
      name: 'Search Catalogue', icon: 'icon-search', link: 'library/search-catalogue',
      permissions: ['access library']
    }, {
      name: 'My Account', icon: 'icon-user-circle-o', link: 'library/my-account',
      permissions: ['access library']
    }, {
      name: 'Admin', icon: 'icon-user-secret', link: 'library/admin', permissions: ['access library admin']
    }
  ],

  admissions: [
    {
      name: 'Student Admissions',icon: 'icon-user-plus', link: 'admissions/students',
      permissions: ['create student', 'update student']
    },
    {
      name: 'Teaching Staff Admissions', icon: 'icon-user-plus', link: 'admissions/staff/teachers',
      permissions: ['create teacher', 'update teacher']
    },
    {
      name: 'Support Staff Admissions', icon: 'icon-user-plus', link: 'admissions/staff/support',
      permissions: ['create support staff']
    }
  ],

  studentAdmissions: [
    {
      name: 'New Student', icon: 'icon-user-plus', link: 'admissions/students/create', permissions: ['create student']
    },
    {
      name: 'Edit Student Details', icon: 'icon-user-plus', link: 'admissions/students/edit', permissions: ['update student']
    }
  ],

  teachingStaffAdmissions: [
    {
      name: 'New Teaching Staff', icon: 'icon-user-plus', link: 'admissions/staff/teachers/create',
      permissions: ['create teacher']
    },
    {
      name: 'Edit Teacher Details', icon: 'icon-pencil-1', link: 'admissions/staff/teachers/edit',
      permissions: ['update teacher']
    }
  ],

  academics: [
    {
      name: 'Academic Year', icon: 'icon-calendar', link: 'academics/academic-year'
    },
    {
      name: 'Curriculum', icon: 'icon-book', link: 'academics/curriculum'
    },
    {
      name: 'Exam Bank', icon: 'icon-balance-scale', link: 'academics/exam-bank'
    },
    {
      name: 'Study Materials', icon: 'icon-book-1', link: 'academics/study-materials'
    },
    {
      name: 'E-Learning', icon: 'icon-paper-plane-empty', link: 'academics/e-learning'
    },
  ],

  academicYears: [
    {
      name: 'Create New', icon: 'icon-folder-open', link: 'academics/academic-year/create'
    },
    {
      name: 'View Archives', icon: 'icon-folder', link: 'academics/academic-year/archives'
    },
    {
      name: 'Subject/ Unit Allocations', icon: 'icon-sliders', link: 'academics/academic-year/subject-allocations'
    }
  ],

  academicYear: [
    {
      name: 'Financial Plan', icon: 'icon-dollar', link: 'academics/academic-year/:id/financial-plan'
    },
    {
      name: 'Subjects/ Units', icon: 'icon-user-plus', link: `academics/academic-year/:id/units`
    },
  ],

  timeTable: [
    { name: 'My Schedules', icon: 'icon-user-circle-o', link: 'time-table/my-schedules' },
    { name: 'Admin', icon: 'icon-user-secret', link: 'time-table/admin' },
  ],
  rolesAndPermissions: [
    {
      name: 'User Roles/ Permissions', icon: 'icon-user-circle-o', link: 'roles-and-permissions/user',
      permissions: [ 'assign role' ]
    },
    {
      name: 'Roles & Permissions', icon: 'icon-sliders', link: 'roles-and-permissions/roles',
      permissions: ['change role permissions' ]
    },
  ]
};


export const reducer = createReducer(
  initialState,

);

