import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment, EnrollmentExpanded } from '../enrollments.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Student } from '../../students/students.component';
import { Course } from '../../courses/courses.component';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: EnrollmentExpanded[] }>(),
    'Load Enrollments Failure': props<{ error: HttpErrorResponse }>(),

    'Load Student Options': emptyProps(),
    'Load Student Options Success': props<{ data: Student[] }>(),
    'Load Student Options Failure': props<{ error: HttpErrorResponse }>(),

    'Load Course Options': emptyProps(),
    'Load Course Options Success': props<{ data: Course[] }>(),
    'Load Course Options Failure': props<{ error: HttpErrorResponse }>(),

    'Create Enrollment': props<{ data: Enrollment }>(),
    'Create Enrollment Success': props<{ data: Enrollment }>(),
    'Create Enrollment Failure': props<{ error: HttpErrorResponse }>(),

    'Delete Enrollment': props<{ id: string }>(),
    'Delete Enrollment Success': props<{ data: Enrollment }>(),
    'Delete Enrollment Failure': props<{ error: HttpErrorResponse }>(),
  }
});
