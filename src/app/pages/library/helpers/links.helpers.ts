export const CREATE_LIBRARY_PUBLISHER =
  '/library/admin/authors/create';
export const EDIT_LIBRARY_PUBLISHER = (id: string | number) => {
  return `/library/admin/authors/${id}/edit`;
};
export const VIEW_LIBRARY_PUBLISHER = (id: string | number) => {
  return `/library/admin/authors/${id}/view`;
};
