import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentExpanded } from '../enrollments.component';
import { Student } from '../../students/students.component';
import { Course } from '../../courses/courses.component';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  data: EnrollmentExpanded[],
  studentOptions: Student[],
  courseOptions: Course[],
  loading: boolean,
  error: unknown
}

export const initialState: State = {
  data: [],
  studentOptions: [],
  courseOptions: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentsActions.loadEnrollments, state => {
    return {
      ...state, loading: true
    } 
  }),
  on(EnrollmentsActions.loadEnrollmentsSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
      loading: false
    }
  }),
  on(EnrollmentsActions.loadEnrollmentsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false
    }
  }),


  on(EnrollmentsActions.loadCourseOptions, state => state),
  on(EnrollmentsActions.loadCourseOptionsSuccess, (state, action) => {
    return {
      ...state,
      courseOptions: action.data
    }
  }),
  on(EnrollmentsActions.loadCourseOptionsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),


  on(EnrollmentsActions.loadStudentOptions, state => state),
  on(EnrollmentsActions.loadStudentOptionsSuccess, (state, action) => {
    return {
      ...state,
      studentOptions: action.data
    }
  }),
  on(EnrollmentsActions.loadStudentOptionsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});

