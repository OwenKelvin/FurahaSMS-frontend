export const VIEW_UNITS_CURRICULUM = 'academics/curriculum/units/view';
export const CREATE_UNIT_CURRICULUM = '/academics/curriculum/units/create';
export const VIEW_UNIT_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/units/${id}/view`;
};
export const EDIT_UNIT_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/units/${id}/edit`;
};

export const VIEW_CLASS_LEVELS_CURRICULUM = '/academics/curriculum/class-levels/view';
export const CREATE_CLASS_LEVEL_CURRICULUM = '/academics/curriculum/class-levels/create';
export const EDIT_CLASS_LEVEL_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/class-levels/${id}/edit`;
};
export const VIEW_CLASS_LEVEL_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/class-levels/${id}/view`;
};


export const VIEW_CLASS_LEVEL_CATEGORIES_CURRICULUM = '/academics/curriculum/class-level-categories/view';
export const CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM =
  '/academics/curriculum/class-level-categories/create';
export const EDIT_CLASS_LEVEL_CATEGORY_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/class-level-categories/edit/${id}`;
};
export const VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/class-level-categories/${id}/view`;
};

export const CREATE_UNIT_CATEGORY_CURRICULUM =
  '/academics/curriculum/unit-categories/create';
export const EDIT_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/unit-categories/${id}/edit`;
};
export const VIEW_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/unit-categories/${id}/view`;
};

export const CREATE_PROCUREMENT_PROPOSAL_REQUEST =
  '/procurements/request';
export const EDIT_PROCUREMENT_PROPOSAL_REQUEST = (id: string | number) => {
  return `/procurements/requests/${id}/edit`;
};
export const VIEW__PROCUREMENT_PROPOSAL_REQUEST = (id: string | number) => {
  return `/procurements/requests/${id}/view`;
};

export const CREATE_PROCUREMENT_VENDOR =
  '/procurements/vendors/create';
export const EDIT_PROCUREMENT_VENDOR = (id: string | number) => {
  return `/procurements/vendors/${id}/edit`;
};
export const VIEW_PROCUREMENT_VENDOR = (id: string | number) => {
  return `/procurements/vendors/${id}/view`;
};

