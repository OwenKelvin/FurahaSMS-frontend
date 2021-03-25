export const procurementLinks = [
  {
    name: 'My Requests', icon: 'icon-user', link: 'procurements/my-requests', permissions: ['make procurement request']
  },
  {
    name: 'Request items', icon: 'icon-basket', link: 'procurements/request', permissions: ['make procurement request']
  },
  {
    name: 'Pending Approval', icon: 'icon-ok-1', link: 'procurements/requests/approve', permissions: ['approve procurement request']
  },
  {
    name: 'Vendors', icon: 'icon-truck-1', link: 'procurements/vendors', permissions: ['create procurement vendor']
  },
  {
    name: 'Tender', icon: 'icon-cart-plus', link: 'procurements/tender', permissions: ['create procurement tender']
  },
  {
    name: 'Bids', icon: 'icon-chat', link: 'procurements/tenders/bids', permissions: ['create procurement bid']
  },
  {
    name: 'Awarded Tenders', icon: 'icon-fire-1', link: 'procurements/tenders/awarded', permissions: ['approve procurement tender']
  }
];
