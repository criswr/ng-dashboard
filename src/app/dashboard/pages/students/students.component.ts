import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { StudentsService } from './students.service';
import { StudentsFormDialogComponent } from './components/students-form-dialog/students-form-dialog.component';

export interface Student {
  id: string,
  name: string,
  lastname: string,
  timestamp: string
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  public students: Observable<Student[]>

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {
    this.studentsService.loadStudents()
    this.students = this.studentsService.getStudents()
  }

  handleOnCreateStudent(): void {
    const dialogRef = this.matDialog.open(StudentsFormDialogComponent)
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const newStudent: Student = {
            id: 's' + crypto.randomUUID().slice(0, 8),
            name: value.name,
            lastname: value.lastname,
            timestamp: new Date().toLocaleDateString('en-US')
          }
          this.studentsService.createStudent(newStudent)
        }
      }
    })
  }

  handleOnDeleteStudent(student: Student): void {
    const confirmation = confirm('¿Eliminar estudiante?')
    if (confirmation) {
      this.studentsService.deleteStudent(student)
    }
  }

  handleOnEditStudent(student: Student): void {
    const dialogRef = this.matDialog.open(StudentsFormDialogComponent, {
      data: student
    })
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const editedStudent: Student = {
            id: student.id,
            name: value.name,
            lastname: value.lastname,
            timestamp: student.timestamp
          }
          this.studentsService.editStudent(editedStudent.id, editedStudent)
        }
      }
    })
  }
}
