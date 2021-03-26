export interface UnitCategoryInterface {
  id: number | null;
  name: string;
  active: boolean | 0 | 1 | null | undefined;
  description?: string;
  units?: any[];
}
