export const VIEW_UNIT_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/units/${id}/view`;
};

export const CREATE_CLASS_LEVEL_CURRICULUM = '/academics/curriculum/class-levels/create';
export const VIEW_CLASS_LEVEL_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/class-levels/${id}/view`;
};

export const VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/class-level-categories/${id}/view`;
};

export const VIEW_UNIT_CATEGORY_CURRICULUM = (id: string | number) => {
  return `/academics/curriculum/unit-categories/${id}/view`;
};
