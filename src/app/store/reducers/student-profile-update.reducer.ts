import { Action, createReducer, on } from '@ngrx/store';
import { loadStudentProfileUpdatesSuccess } from '../actions/student-profile-update.actions';


export const studentProfileUpdateFeatureKey = 'studentProfile';

export interface StudentProfileStateInterface {
  id: number;
  firstName: string;
  lastName: string;
  studentId?: number;
  middleName?: string;
  otherNames?: string;
  dateOfBirth?: string;
  religion?: string;
  gender?: string;
}

export const initialState: StudentProfileStateInterface = {
  id: 0,
  firstName: '',
  lastName: '',
  studentId: 0
};

const studentProfileUpdateReducer = createReducer(
  initialState,
  on(loadStudentProfileUpdatesSuccess, (state, payload) => ({
      ...state, ...payload.data
    })),
);

export const reducer = (state: StudentProfileStateInterface | undefined, action: Action) => studentProfileUpdateReducer(state, action);
