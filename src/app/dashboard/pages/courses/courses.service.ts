import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { Course } from './courses.component';

const COURSES_DATA: Observable<Course[]> = of([
  {
    id: 'cd8jt23x4',
    subject: 'Desarrollo de videojuegos',
    start: '2023-07-14',
    end: '2023-09-14',
  },
  {
    id: 'cer7fs61m',
    subject: 'Introducción a Python',
    start: '2023-11-30',
    end: '2023-12-19',
  },
])


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses$ = new BehaviorSubject<Course[]>([])
  private courses$ = this._courses$.asObservable()
  
  constructor() { }

  loadCourses(): void {
    COURSES_DATA.subscribe({
      next: courses => this._courses$.next(courses)
    })
  }

  getCourses(): Observable<Course[]> {
    return this.courses$;
  }

  createCourse(newCourse: Course): void {
    this.courses$.pipe(take(1)).subscribe({
      next: arr => this._courses$.next([...arr, newCourse])
    })
  }
  
  editCourse(editedCourse: Course): void {
    this.courses$.pipe(take(1)).subscribe({
      next: arr => {
        const editedCourseIndex = arr.findIndex(u => u.id === editedCourse.id)
        arr[editedCourseIndex] = editedCourse
        this._courses$.next([...arr])
      }
    })
  }

  deleteCourse(course: Course): void {
    this.courses$.pipe(take(1)).subscribe({
      next: arr => this._courses$.next([...arr.filter(c => c.id !== course.id)])
    })
  }
}
