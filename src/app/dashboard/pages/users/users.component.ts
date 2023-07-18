import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';

export interface User {
  uuid: string
  name: string;
  lastname: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  {
    uuid: '9eebdd8e-d680-4e25-801f-d9fdd891e64a ',
    name: 'Cristian',
    lastname: 'Wargny',
    email: 'cristian@email.com'
  },
  {
    uuid: 'leebdd8e-d680-4e25-59de-d9fdd891exe5 ',
    name: 'Myriam',
    lastname: 'Gutierrez',
    email: 'myriam@email.com'
  }
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  public users: User[] = ELEMENT_DATA

  constructor(
    private matDialog: MatDialog
  ) {}

  handleOnCreateUser(): void {
    const dialogRef = this.matDialog.open(UserFormDialogComponent)
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value){
          const newUser: User = {
            uuid: crypto.randomUUID(),
            name: value.name,
            lastname: value.lastname,
            email: value.email
          }
          this.users = [...this.users, newUser]
        }
      }
    })
  }

  handleOnDeleteUser(user: User): void {
    const confirmation = confirm('¿Eliminar al usuario?')
    if (confirmation) {
      this.users = this.users.filter(u => u.uuid !== user.uuid)
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
            email: value.email
          }

          const usersArray = this.users
          const editedUserIndex = usersArray.findIndex(u => u.uuid === user.uuid)
          usersArray[editedUserIndex] = editedUser
          this.users = [...usersArray]         
        }
        
      }
    })
  }
}

