import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { HttpClient } from '@angular/common/http';
import { Enrollment, EnrollmentExpanded } from '../enrollments.component';
import { environment } from 'src/environment/environment';
import { Course } from '../../courses/courses.component';
import { Student } from '../../students/students.component';
import { Store } from '@ngrx/store';


@Injectable()
export class EnrollmentsEffects {

  loadEnrollmentss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadEnrollments),
      concatMap(() =>
        this.getEnrollmentsFromDB().pipe(
          map(data => EnrollmentsActions.loadEnrollmentsSuccess({ data })),
          catchError(error => of(EnrollmentsActions.loadEnrollmentsFailure({ error }))))
      )
    );
  });

  loadCourseOptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadCourseOptions),
      concatMap(() =>
        this.getCourseOptions().pipe(
          map(data => EnrollmentsActions.loadCourseOptionsSuccess({ data })),
          catchError(error => of(EnrollmentsActions.loadCourseOptionsFailure({ error }))))
      )
    );
  });

  loadStudentOptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadStudentOptions),
      concatMap(() =>
        this.getStudentOptions().pipe(
          map(data => EnrollmentsActions.loadStudentOptionsSuccess({ data })),
          catchError(error => of(EnrollmentsActions.loadStudentOptionsFailure({ error }))))
      )
    );
  });

  createEnrollment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.createEnrollment),
      concatMap((action) =>
        this.createEnrollment(action.data).pipe(
          map(data => EnrollmentsActions.createEnrollmentSuccess({ data })),
          catchError(error => of(EnrollmentsActions.createEnrollmentFailure({ error }))))
      )
    );
  });

  createEnrollmentSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.createEnrollmentSuccess),
      map(() => this.store.dispatch(EnrollmentsActions.loadEnrollments()))
    );
  }, { dispatch: false });

  deleteEnrollment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.deleteEnrollment),
      concatMap((action) =>
        this.deleteEnrollment(action.id).pipe(
          map(data => EnrollmentsActions.deleteEnrollmentSuccess({ data })),
          catchError(error => of(EnrollmentsActions.deleteEnrollmentFailure({ error }))))
      )
    );
  });

  deleteEnrollmentSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.deleteEnrollmentSuccess),
      map(() => this.store.dispatch(EnrollmentsActions.loadEnrollments()))
    );
  }, { dispatch: false });


  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store) {}

  private getEnrollmentsFromDB(): Observable<EnrollmentExpanded[]> {
    return this.httpClient.get<EnrollmentExpanded[]>(environment.baseApiUrl + 'enrollments?_expand=course&_expand=student')
  }

  private getCourseOptions(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(environment.baseApiUrl + 'courses')
  }

  private getStudentOptions(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(environment.baseApiUrl + 'students')
  }

  private createEnrollment(data: Enrollment): Observable<Enrollment>{
    return this.httpClient.post<Enrollment>(environment.baseApiUrl + 'enrollments', data)
  }

  private deleteEnrollment(id: string): Observable<Enrollment>{
    return this.httpClient.delete<Enrollment>(environment.baseApiUrl + 'enrollments/' + id)
  }
}
