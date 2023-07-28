import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../students.component';

@Component({
  selector: 'app-students-form-dialog',
  templateUrl: './students-form-dialog.component.html',
  styleUrls: ['./students-form-dialog.component.scss']
})
export class StudentsFormDialogComponent {
  nameControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  lastnameControl = new FormControl('', [Validators.required, Validators.minLength(2)])

  studentsForm: FormGroup = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
  })

  constructor(
    private dialogRef: MatDialogRef<StudentsFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Student
  ) {
    if (this.data){
      this.nameControl.setValue(this.data.name)
      this.lastnameControl.setValue(this.data.lastname)
    }
  }

  handleOnSubmit(): void {
    const value = this.studentsForm.value
    this.dialogRef.close(value)
  }
}
