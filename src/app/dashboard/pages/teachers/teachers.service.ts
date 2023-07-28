import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { Teacher } from './teachers.component';

const TEACHERS_DATA: Observable<Teacher[]> = of([
  {
    id: 't0121sl9y',
    name: 'Juan',
    lastname: 'Gonzalez',
    timestamp: '7/25/2023',
  },
  {
    id: 't6dep1p03',
    name: 'Leonor',
    lastname: 'Mateos',
    timestamp: '1/11/2023',
  },
  {
    id: 't36dqz5lp',
    name: 'Enrique',
    lastname: 'Rodriguez',
    timestamp: '7/28/2021',
  },
])

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private _teacher$ = new BehaviorSubject<Teacher[]>([])
  private teacher$ = this._teacher$.asObservable()
  
  constructor() { }

  loadTeachers(): void {
    TEACHERS_DATA.subscribe({
      next: teachers => this._teacher$.next(teachers)
    })
  }

  getTeachers(): Observable<Teacher[]> {
    return this.teacher$;
  }

  createTeacher(newTeacher: Teacher): void {
    this.teacher$.pipe(take(1)).subscribe({
      next: arr => this._teacher$.next([...arr, newTeacher])
    })
  }
  
  editTeacher(editedTeacher: Teacher): void {
    this.teacher$.pipe(take(1)).subscribe({
      next: arr => {
        const editedTeacherIndex = arr.findIndex(u => u.id === editedTeacher.id)
        arr[editedTeacherIndex] = editedTeacher
        this._teacher$.next([...arr])
      }
    })
  }

  deleteTeacher(teacher: Teacher): void {
    this.teacher$.pipe(take(1)).subscribe({
      next: arr => this._teacher$.next([...arr.filter(t => t.id !== teacher.id)])
    })
  }
}
