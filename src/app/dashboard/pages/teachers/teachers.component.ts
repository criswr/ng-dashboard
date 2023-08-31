import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TeachersService } from './teachers.service';
import { TeachersFormDialogComponent } from './components/teachers-form-dialog/teachers-form-dialog.component';
import { User } from '../users/users.component';
import { AuthService } from 'src/app/auth/auth.services';

export interface Teacher {
  id: string,
  name: string,
  lastname: string,
  timestamp: string
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  public teachers: Observable<Teacher[]>
  public authUser$: Observable<User | null>

  constructor(
    private matDialog: MatDialog,
    private teacherService: TeachersService,
    private authService: AuthService
    ) {
    this.teacherService.loadTeachers()
    this.teachers = this.teacherService.getTeachers()
    this.authUser$ = this.authService.authUser$
  }

  handleOnCreateTeacher(): void {
    const dialogRef = this.matDialog.open(TeachersFormDialogComponent)
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const newTeacher: Teacher = {
            id: 't' + crypto.randomUUID().slice(0, 8),
            name: value.name,
            lastname: value.lastname,
            timestamp: new Date().toLocaleDateString('en-US')
          }
          this.teacherService.createTeacher(newTeacher)
        }
      }
    })
  }

  handleOnDeleteTeacher(teacher: Teacher): void {
    const confirmation = confirm('¿Eliminar profesor?')
    if (confirmation) {
      this.teacherService.deleteTeacher(teacher)
    }
  }

  handleOnEditTeacher(teacher: Teacher): void {
    const dialogRef = this.matDialog.open(TeachersFormDialogComponent, {
      data: teacher
    })
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const editedTeacher: Teacher = {
            id: teacher.id,
            name: value.name,
            lastname: value.lastname,
            timestamp: teacher.timestamp
          }
          this.teacherService.editTeacher(editedTeacher.id, editedTeacher)
        }
      }
    })
  }
}
