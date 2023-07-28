import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { Student } from './students.component';

const STUDENTS_DATA: Observable<Student[]> = of([
  {
    id: 's0121sl9y',
    name: 'Carlos',
    lastname: 'Donoso',
    timestamp: '7/25/2023',
  },
  {
    id: 's6dep1p03',
    name: 'Alicia',
    lastname: 'Cárdenas',
    timestamp: '1/11/2022',
  },
  {
    id: 's36dqz5lp',
    name: 'Pablo',
    lastname: 'Soto',
    timestamp: '7/28/2022',
  },
])

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _students$ = new BehaviorSubject<Student[]>([])
  private students$ = this._students$.asObservable()

  constructor() { }

  loadStudents(): void {
    STUDENTS_DATA.subscribe({
      next: students => this._students$.next(students)
    })
  }

  getStudents(): Observable<Student[]> {
    return this.students$;
  }

  createStudent(newStudent: Student): void {
    this.students$.pipe(take(1)).subscribe({
      next: arr => this._students$.next([...arr, newStudent])
    })
  }
  
  editStudent(editedStudent: Student): void {
    this.students$.pipe(take(1)).subscribe({
      next: arr => {
        const editedStudentIndex = arr.findIndex(u => u.id === editedStudent.id)
        arr[editedStudentIndex] = editedStudent
        this._students$.next([...arr])
      }
    })
  }

  deleteStudent(student: Student): void {
    this.students$.pipe(take(1)).subscribe({
      next: arr => this._students$.next([...arr.filter(s => s.id !== student.id)])
    })
  }

}
