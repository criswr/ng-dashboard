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
  roleControl = new FormControl('', [Validators.required])

  userForm: FormGroup = new FormGroup({
    name: this.nameControl,
    lastname: this.lastnameControl,
    email: this.emailControl,
    password: this.passwordControl,
    role: this.roleControl,
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
        this.roleControl.setValue(this.data.role)
      }
    }

  handleOnSubmit(): void {
    const value = this.userForm.value
    if (this.data) {
      value.token = this.data.token
    }
    this.dialogRef.close(value)
  }
}
