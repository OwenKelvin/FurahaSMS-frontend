export const CREATE_LIBRARY_PUBLISHER =
  '/library/admin/publishers/create';
export const EDIT_LIBRARY_PUBLISHER = (id: string | number) => {
  return `/library/admin/publishers/${id}/edit`;
};
export const VIEW_LIBRARY_PUBLISHER = (id: string | number) => {
  return `/library/admin/publishers/${id}/view`;
};
