import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from './store/enrollments.actions';
import { Course } from '../courses/courses.component';
import { Student } from '../students/students.component';
import { Observable } from 'rxjs';
import { selectEnrollments } from './store/enrollments.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentsFormDialogComponent } from './components/enrollments-form-dialog/enrollments-form-dialog.component';

export interface Enrollment {
  id: string,
  courseId: string,
  studentId: string,
}

export interface EnrollmentExpanded extends Enrollment {
  course: Course,
  student: Student
}

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})

export class EnrollmentsComponent implements OnInit{

  enrollments$: Observable<EnrollmentExpanded[]>

  constructor(
    private store: Store,
    private matDialog: MatDialog
  ) {
    this.enrollments$ = this.store.select(selectEnrollments)
  }

  handleOnDeleteEnrollment(enrollment: EnrollmentExpanded): void {
    const confirmation = confirm('¿Eliminar inscripción?')
    if (confirmation) {
      this.store.dispatch(EnrollmentsActions.deleteEnrollment({id: enrollment.id}))
    }
  }

  handleOnCreateEnrollment(): void {
    const dialogRef = this.matDialog.open(EnrollmentsFormDialogComponent)
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const newEnrollment: Enrollment = {
            id: 'e' + crypto.randomUUID().slice(0, 8),
            courseId: value.course,
            studentId: value.student
          }
          this.store.dispatch(EnrollmentsActions.createEnrollment({data: newEnrollment}))

        }
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch(EnrollmentsActions.loadEnrollments())
  }

}
