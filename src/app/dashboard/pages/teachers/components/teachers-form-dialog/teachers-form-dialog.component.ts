import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Teacher } from '../../teachers.component';

@Component({
  selector: 'app-teachers-form-dialog',
  templateUrl: './teachers-form-dialog.component.html',
  styleUrls: ['./teachers-form-dialog.component.scss']
})
export class TeachersFormDialogComponent {
  nameControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  lastnameControl = new FormControl('', [Validators.required, Validators.minLength(2)])

  teachersForm: FormGroup = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
  })

  constructor(
    private dialogRef: MatDialogRef<TeachersFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Teacher
  ) {
    if (this.data){
      this.nameControl.setValue(this.data.name)
      this.lastnameControl.setValue(this.data.lastname)
    }
  }

  handleOnSubmit(): void {
    const value = this.teachersForm.value
    this.dialogRef.close(value)
  }
}
