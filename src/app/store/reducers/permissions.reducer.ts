import { Action, createReducer, on } from '@ngrx/store';
import { LinkInterface } from 'src/app/interfaces/link.interface';


export const permissionsFeatureKey = 'permissions';

export interface State {
  [id: string]: LinkInterface[];
}

export const initialState: State = {
  dashboard: [
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
        'access student academic reports',
        'upload curriculum content',
        'update curriculum content',
        'access academics',
        'view subject curriculum',
        'edit subject curriculum',
        'create subject curriculum',
        'access curriculum management',
        'view academic year',
        'create academic year',
        'access academic year',
        'access academic year management',
        'update curriculum system',
        'create curriculum system',
        'create e-learning course']
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
  ],

  accounts: [
    {
      name: 'Financial Plan',
      icon: 'icon-edit-1',
      link: 'accounts/financial-plan',
      permissions: ['access financial plan', 'create financial plan']
    },
    {
      name: 'Student Fee Payment',
      icon: 'icon-dollar',
      link: 'accounts/student-fee-payment',
      permissions: ['receive student fee payment']
    },
    {
      name: 'Admin',
      icon: 'icon-user-secret',
      link: 'accounts/admin',
      permissions: ['update fee plan', 'create fee plan', 'access fee plan']
    }
  ],

  examBank: [
    {
      name: 'Past Exams',
      icon: 'icon-folder-open',
      link: 'academics/exam-bank/archives',
      permissions: ['access academics']
    },
    {
      name: 'Admin',
      icon: 'icon-user-secret',
      link: 'academics/exam-bank/admin',
      permissions: ['access exam plan', 'create exam plan']
    },
  ],

  libraryAdminUsers: [
    {
      name: 'Add Library User',
      icon: 'icon-user-plus',
      link: 'library/admin/users/add',
      permissions: ['add library user']
    },
  ],

  libraryAdminBooks: [
    {
      name: 'Add Library Book',
      icon: 'icon-plus-squared',
      link: 'library/admin/books/create',
      permissions: ['edit library book', 'add library book']
    },
  ],

  procurement: [
    {
      name: 'My Requests',
      icon: 'icon-user',
      link: 'procurements/my-requests',
      permissions: ['make procurement request']
    },
    {
      name: 'Request items',
      icon: 'icon-basket',
      link: 'procurements/request',
      permissions: ['make procurement request']
    },
    {
      name: 'Pending Approval',
      icon: 'icon-ok-1',
      link: 'procurements/requests/approve',
      permissions: ['approve procurement request']
    },
    {
      name: 'Vendors',
      icon: 'icon-truck-1',
      link: 'procurements/vendors',
      permissions: ['create procurement vendor']
    },
    {
      name: 'Tender',
      icon: 'icon-cart-plus',
      link: 'procurements/tender',
      permissions: ['create procurement tender']
    },
    {
      name: 'Bids',
      icon: 'icon-chat',
      link: 'procurements/tenders/bids',
      permissions: ['create procurement bid']
    },
    {
      name: 'Awarded Tenders',
      icon: 'icon-fire-1',
      link: 'procurements/tenders/awarded',
      permissions: ['approve procurement tender']
    }

  ],

  libraryAdmin: [
    {
      name: 'Users Management',
      icon: 'icon-users-1',
      link: 'library/admin/users',
      permissions: ['add library user', 'block library user', 'unblock library user']
    },
    {
      name: 'Books Management',
      icon: 'icon-book',
      link: 'library/admin/books',
      permissions: ['add library book', 'edit library book']
    },
    {
      name: 'Authors Management',
      icon: 'icon-pencil',
      link: 'library/admin/authors',
      permissions: ['add library book author', 'edit library book author']
    },
    {
      name: 'Publishers Management',
      icon: 'icon-library',
      link: 'library/admin/publishers',
      permissions: ['add library book publisher', 'edit library book publisher']
    },
    {
      name: 'Tags Management',
      icon: 'icon-tag',
      link: 'library/admin/tags',
      permissions: ['add library book tag', 'edit library book tag']
    }
  ],

  academicCurriculum: [
    {
      name: 'Subject Categories',
      icon: 'icon-docs',
      link: 'academics/curriculum/unit-categories',
      permissions: [
        'access curriculum management',
        'view subject curriculum',
        'edit subject curriculum',
        'create subject curriculum']
    },
    {
      name: 'Subject Units',
      icon: 'icon-docs',
      link: 'academics/curriculum/units',
      permissions: [
        'access curriculum management',
        'view subject curriculum',
        'edit subject curriculum',
        'create subject curriculum']
    },
    {
      name: 'Class Level Categories',
      icon: 'icon-docs',
      link: 'academics/curriculum/class-level-categories',
      permissions: [
        'access curriculum management',
        'view subject curriculum',
        'edit subject curriculum',
        'create subject curriculum']
    },
    {
      name: 'Class Levels',
      icon: 'icon-docs',
      link: 'academics/curriculum/class-levels',
      permissions: [
        'access curriculum management',
        'view subject curriculum',
        'edit subject curriculum',
        'create subject curriculum']
    },
    {
      name: 'Semester/ Terms',
      icon: 'icon-docs',
      link: 'academics/curriculum/semesters',
      permissions: [
        'access curriculum management',
        'view subject curriculum',
        'edit subject curriculum',
        'create subject curriculum']
    },
  ],

  library: [
    {
      name: 'Search Catalogue',
      icon: 'icon-search',
      link: 'library/search-catalogue',
      permissions: ['access library']
    }, {
      name: 'My Account',
      icon: 'icon-user-circle-o',
      link: 'library/my-account',
      permissions: ['access library']
    }, {
      name: 'Admin',
      icon: 'icon-user-secret',
      link: 'library/admin',
      permissions: ['access library admin']
    }
  ],

  admissions: [
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
  ],

  studentAdmissions: [
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
  ],

  teachingStaffAdmissions: [
    {
      name: 'New Teaching Staff',
      icon: 'icon-user-plus',
      link: 'admissions/staff/teachers/create',
      permissions: ['create teacher']
    },
    {
      name: 'Edit Teacher Details',
      icon: 'icon-pencil-1',
      link: 'admissions/staff/teachers/edit',
      permissions: ['update teacher']
    }
  ],

  academics: [
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
  ],

  academicYears: [
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
  ],

  academicYear: [
    {
      name: 'Financial Plan',
      icon: 'icon-dollar',
      link: 'academics/academic-year/:id/financial-plan'
    },
    {
      name: 'Subjects/ Units',
      icon: 'icon-user-plus',
      link: `academics/academic-year/:id/units`
    },
  ],

  timeTable: [
    { name: 'My Schedules', icon: 'icon-user-circle-o', link: 'time-table/my-schedules' },
    { name: 'Admin', icon: 'icon-user-secret', link: 'time-table/admin' },
  ],
  rolesAndPermissions: [
    {
      name: 'User Roles/ Permissions',
      icon: 'icon-user-circle-o',
      link: 'roles-and-permissions/user',
      permissions: [
        'assign role'
      ]
    },
    {
      name: 'Roles & Permissions',
      icon: 'icon-sliders',
      link: 'roles-and-permissions/roles',
      permissions: [
        'change role permissions'
      ]
    },
  ]
};


export const reducer = createReducer(
  initialState,

);

