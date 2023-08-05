import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';


export interface User {
  id: string,
  name: string,
  lastname: string,
  email: string,
  password: string,
  token: string,
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
            id: 'u' + crypto.randomUUID().slice(0, 8),
            name: value.name,
            lastname: value.lastname,
            email: value.email,
            password: value.password,
            token: crypto.randomUUID()
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
            id: user.id,
            name: value.name,
            lastname: value.lastname,
            email: value.email,
            password: value.password,
            token: value.token
          }
          this.usersService.editUser(editedUser.id, editedUser)
        }
      }
    })
  }
}

