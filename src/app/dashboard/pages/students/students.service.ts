import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './students.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _students$ = new BehaviorSubject<Student[]>([])
  private students$ = this._students$.asObservable()

  constructor(private httpClient: HttpClient) { }

  loadStudents(): void {
    this.httpClient.get<Student[]>(environment.baseApiUrl + 'students', {}).subscribe({
      next: res => this._students$.next(res)
    })
  }

  getStudents(): Observable<Student[]> {
    return this.students$
  }

  createStudent(newStudent: Student): void {
    this.httpClient.post<Student>(environment.baseApiUrl + 'students', newStudent).subscribe({
      next: () => this.loadStudents()
    })
  }
  
  editStudent(id: string, editedStudent: Student): void {
    this.httpClient.put(environment.baseApiUrl + 'students/' + id, editedStudent).subscribe({
      next: () => this.loadStudents()
    })
  }

  deleteStudent(student: Student): void {
    this.httpClient.delete(environment.baseApiUrl + 'students/' + student.id)
    .subscribe({
      next: () => this.loadStudents()
    })
  }
}
