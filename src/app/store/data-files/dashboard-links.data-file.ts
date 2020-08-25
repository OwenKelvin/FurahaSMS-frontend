export const dashboardLinks = [
  {
    name: 'Admissions', icon: 'icon-user-plus', link: 'admissions',
    permissions: ['view admissions', 'access teacher admission', 'view student admissions']
  },
  {
    name: 'Students', icon: 'icon-school', link: 'students',
    permissions: ['access student academic reports', 'upload curriculum content', 'update curriculum content',
      'access academics', 'view subject curriculum', 'edit subject curriculum', 'create subject curriculum',
      'access curriculum management', 'view academic year', 'create academic year', 'access academic year',
      'access academic year management', 'update curriculum system', 'create curriculum system',
      'create e-learning course']
  },
  {
    name: 'Teachers', icon: 'icon-police', link: 'teachers',
    permissions: ['assign subject to teacher', 'access teacher admission', 'create teacher',
      'read teacher', 'update teacher', 'delete teacher', 'verify teacher']
  },
  {
    name: 'Library', icon: 'icon-library', link: 'library',
    permissions: ['edit library book tag', 'add library book tag', 'add library book', 'edit library book',
      'issue Library book', 'mark library book returned', 'access library admin', 'access library account',
      'access library']
  },
  {
    name: 'Accounts', icon: 'icon-bank', link: 'accounts', permissions: ['access accounting'],
  },
  {
    name: 'Procuments', icon: 'icon-truck', link: 'procurements',
    permissions: ['make procurement request', 'approve procurement request', 'create procurement vendor',
      'create procurement tender', 'create procurement bid'
    ]
  },
  {
    name: 'Sports', icon: 'icon-tennis', link: 'sports'
  },
  {
    name: 'Management', icon: 'icon-flow-tree', link: 'school-management'
  },
  {
    name: 'Time Table', icon: 'icon-clock', link: 'time-table'
  },
  {
    name: 'Academics', icon: 'icon-book', link: 'academics',
    permissions: ['access student academic reports', 'upload curriculum content', 'update curriculum content',
      'access academics', 'view subject curriculum', 'edit subject curriculum', 'create subject curriculum',
      'access curriculum management', 'view academic year', 'create academic year', 'access academic year',
      'access academic year management', 'update curriculum system', 'create curriculum system',
      'create e-learning course']
  },
  {
    name: 'Roles & Permissions', icon: 'icon-block', link: 'roles-and-permissions',
    permissions: ['assign role', 'change role permissions']
  },
  {
    name: 'Reports', icon: 'icon-doc-text-inv', link: 'reports',
    permissions: ['view student scores reports', 'access student academic reports', 'access student list report',
      'access reports'
    ]
  },
];
