export interface ICourse {
  unitLevelId?: number;
  id?: number;
  name: string;
  description?: string;
  unitId?: number;
  unitName?: string;
  unitAbbreviation?: string;
  classLevelId?: number;
  classLevelName?: string;
  classLevelAbbreviation?: string;
  academicYear?: string;
  academicYearId?: number;
  academicYearName?: string;
  topicNumberStyleName?: string;
  topics?: any[];
}
