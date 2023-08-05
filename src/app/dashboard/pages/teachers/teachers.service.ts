import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Teacher } from './teachers.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private _teacher$ = new BehaviorSubject<Teacher[]>([])
  private teacher$ = this._teacher$.asObservable()
  
  constructor(private httpClient: HttpClient) { }

  loadTeachers(): void {
    this.httpClient.get<Teacher[]>(environment.baseApiUrl + 'teachers', {}).subscribe({
      next: res => this._teacher$.next(res)
    })
  }

  getTeachers(): Observable<Teacher[]> {
    return this.teacher$
  }

  createTeacher(newTeacher: Teacher): void {
    this.httpClient.post<Teacher>(environment.baseApiUrl + 'teachers', newTeacher).subscribe({
      next: () => this.loadTeachers()
    })
  }
  
  editTeacher(id: string, editedTeacher: Teacher): void {
    this.httpClient.put(environment.baseApiUrl + 'teachers/' + id, editedTeacher).subscribe({
      next: () => this.loadTeachers()
    })
  }

  deleteTeacher(teacher: Teacher): void {
    this.httpClient.delete(environment.baseApiUrl + 'teachers/' + teacher.id)
    .subscribe({
      next: () => this.loadTeachers()
    })
  }
}
