import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './users/components/user-form-dialog/user-form-dialog.component';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';


export interface User {
  uuid: string
  name: string;
  lastname: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  public users: Observable<User[]>

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService
  ) {
    this.usersService.loadUsers()
    this.users = this.usersService.getUsers()
  }

  handleOnCreateUser(): void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent)
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){ 
          const newUser: User = {
            uuid: crypto.randomUUID().slice(0, 8),
            name: value.name,
            lastname: value.lastname,
            email: value.email,
            password: value.password
          }
          this.usersService.createUser(newUser)
        }
      }
    })
  }

  handleOnDeleteUser(user: User): void {
    const confirmation = confirm('¿Eliminar al usuario?')
    if (confirmation) {
      this.usersService.deleteUser(user)
    }
  }

  handleOnEditUser(user: User): void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent, {
      data: user
    })
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const editedUser: User = {
            uuid: user.uuid,
            name: value.name,
            lastname: value.lastname,
            email: value.email,
            password: value.password
          }
          this.usersService.editUser(editedUser)
        }
      }
    })
  }
}

