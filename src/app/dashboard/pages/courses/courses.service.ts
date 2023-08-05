import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from './courses.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courses$ = new BehaviorSubject<Course[]>([])
  private courses$ = this._courses$.asObservable()
  
  constructor(private httpClient: HttpClient, private toast: ToastService) { }

  loadCourses(): void {
    this.httpClient.get<Course[]>(environment.baseApiUrl + 'courses').subscribe({
      next: res => this._courses$.next(res),
      error: () => this.toast.fireToast('Hubo un error al cargar')
    })
  }

  getCourses(): Observable<Course[]> {
    return this.courses$
  }

  createCourse(newCourse: Course): void {
    this.httpClient.post<Course>(environment.baseApiUrl + 'courses', newCourse).subscribe({
      next: () => this.loadCourses()
    })
  }
  
  editCourse(id:string, editedCourse: Course): void {
    this.httpClient.put(environment.baseApiUrl + 'courses/' + id, editedCourse).subscribe({
      next: () => this.loadCourses()
    })
  }

  deleteCourse(course: Course): void {
    this.httpClient.delete(environment.baseApiUrl + 'courses/' + course.id)
    .subscribe({
      next: () => this.loadCourses()
    })
  }
}
