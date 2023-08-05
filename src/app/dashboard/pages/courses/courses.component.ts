import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CoursesService } from './courses.service';
import { CoursesFormDialogComponent } from './components/courses-form-dialog/courses-form-dialog.component';

export interface Course {
  id: string,
  subject: string,
  start: string,
  end: string
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public courses: Observable<Course[]>
  
  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService
  ) {
    this.coursesService.loadCourses()
    this.courses = this.coursesService.getCourses()
  }

  handleOnCreateCourse(): void {
    const dialogRef = this.matDialog.open(CoursesFormDialogComponent)
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const newCourse: Course = {
            id: 'c' + crypto.randomUUID().slice(0, 8),
            subject: value.subject,
            start: value.start,
            end: value.end
          }
          this.coursesService.createCourse(newCourse)
        }
      }
    })
  }

  handleOnDeleteCourse(course: Course): void {
    const confirmation = confirm('¿Eliminar curso?')
    if (confirmation) {
      this.coursesService.deleteCourse(course)
    }
  }

  handleOnEditCourse(course: Course): void {
    const dialogRef = this.matDialog.open(CoursesFormDialogComponent, {
      data: course
    })
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const editedCourse: Course = {
            id: course.id,
            subject: value.subject,
            start: value.start,
            end: value.end
          }
          this.coursesService.editCourse(editedCourse.id, editedCourse)
        }
      }
    })
  }
}
