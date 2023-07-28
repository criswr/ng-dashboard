import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../courses.component';

@Component({
  selector: 'app-courses-form-dialog',
  templateUrl: './courses-form-dialog.component.html',
  styleUrls: ['./courses-form-dialog.component.scss']
})

export class CoursesFormDialogComponent {
  subjectControl = new FormControl('', [Validators.required, Validators.minLength(4)])
  startControl = new FormControl('', [Validators.required])
  endControl = new FormControl('', [Validators.required])

  courseForm: FormGroup = new FormGroup({
    subject: this.subjectControl,
    start: this.startControl,
    end: this.endControl
  })

  constructor(
    private dialogRef: MatDialogRef<CoursesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Course
  ) {
    if (this.data){
      this.subjectControl.setValue(this.data.subject)
      this.startControl.setValue(this.data.start)
      this.endControl.setValue(this.data.end)
    }
  }

  handleOnSubmit(): void {
    const value = this.courseForm.value
    this.dialogRef.close(value)
  }

}
