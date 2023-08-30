import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnrollmentExpanded } from '../../enrollments.component';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from '../../store/enrollments.actions';
import { Observable } from 'rxjs';
import { Course } from '../../../courses/courses.component';
import { selectCourseOptions, selectStudentOptions } from '../../store/enrollments.selectors';
import { Student } from '../../../students/students.component';

@Component({
  selector: 'app-enrollments-form-dialog',
  templateUrl: './enrollments-form-dialog.component.html',
  styleUrls: ['./enrollments-form-dialog.component.scss']
})
export class EnrollmentsFormDialogComponent implements OnInit{
  courseControl = new FormControl('', [Validators.required])
  studentControl = new FormControl('', [Validators.required])

  enrollmentsForm: FormGroup = new FormGroup({
    course: this.courseControl,
    student: this.studentControl,
  })

  courseOptions$: Observable<Course[]>
  studentOptions$: Observable<Student[]>

  constructor(
    private dialogRef: MatDialogRef<EnrollmentsFormDialogComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) private data?: EnrollmentExpanded,
  ) {
    this.courseOptions$ = this.store.select(selectCourseOptions)
    this.studentOptions$ = this.store.select(selectStudentOptions)
    if (this.data){
      this.courseControl.setValue(this.data.courseId)
      this.studentControl.setValue(this.data.studentId)
    }
  }

  ngOnInit(): void {
    this.store.dispatch(EnrollmentsActions.loadCourseOptions())
    this.store.dispatch(EnrollmentsActions.loadStudentOptions())
  }

  handleOnSubmit(): void {
    const value = this.enrollmentsForm.value
    this.dialogRef.close(value)
  }
}
