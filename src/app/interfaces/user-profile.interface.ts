export interface IUserProfile {
  id: number;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  otherNames?: string;
  phone?: string;
  email?: string;
  dateOfBirth?: string;
  genderName?: string;
  religionName?: string;
  studentId?: number;
  permissions?: string[];
  roles?: string[];
}
