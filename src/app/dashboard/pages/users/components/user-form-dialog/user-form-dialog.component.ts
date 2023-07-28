import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../users.component';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})

export class UserFormDialogComponent {
  nameControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  lastnameControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  emailControl = new FormControl('', [Validators.required, Validators.email])
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)])

  userForm: FormGroup = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
    email: this.emailControl,
    password: this.passwordControl,
  })

  constructor(
      private dialogRef: MatDialogRef<UserFormDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data?: User
    ) {
      if (this.data){
        this.nameControl.setValue(this.data.name)
        this.lastnameControl.setValue(this.data.lastname)
        this.emailControl.setValue(this.data.email)
        this.passwordControl.setValue(this.data.password)
      }
    }

  handleOnSubmit(): void {
    const value = this.userForm.value
    this.dialogRef.close(value)
  }
}
