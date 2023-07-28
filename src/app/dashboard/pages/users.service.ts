import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { User } from './users.component';

const USERS_DATA: Observable<User[]> = of([
  {
    uuid: '9eebdd8e',
    name: 'Cristian',
    lastname: 'Wargny',
    email: 'cristian@email.com',
    password: '1234'
  },
  {
    uuid: 'leej6r8e',
    name: 'Myriam',
    lastname: 'Gutierrez',
    email: 'myriam@email.com',
    password: '1234'
  }
])

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private _users$ = new BehaviorSubject<User[]>([])
  private users$ = this._users$.asObservable()

  constructor() { }

  loadUsers(): void {
    USERS_DATA.subscribe({
      next: users => this._users$.next(users)
    })
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  createUser(newUser: User): void {
    this.users$.pipe(take(1)).subscribe({
      next: arr => this._users$.next([...arr, newUser])
    })
  }
  
  editUser(editedUser: User): void {
    this.users$.pipe(take(1)).subscribe({
      next: arr => {
        const editedUserIndex = arr.findIndex(u => u.uuid === editedUser.uuid)
        arr[editedUserIndex] = editedUser
        this._users$.next([...arr])
      }
    })
  }

  deleteUser(user: User): void {
    this.users$.pipe(take(1)).subscribe({
      next: arr => this._users$.next([...arr.filter(u => u.uuid !== user.uuid)])
    })
  }
}
