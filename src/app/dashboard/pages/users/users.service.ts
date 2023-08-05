import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { User } from './users.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private _users$ = new BehaviorSubject<User[]>([])
  private users$ = this._users$.asObservable()

  constructor(private httpClient: HttpClient) { }

  loadUsers(): void {
    this.httpClient.get<User[]>(environment.baseApiUrl + 'users', {}).subscribe({
      next: res => this._users$.next(res)
    })
  }

  getUsers(): Observable<User[]> {
    return this.users$
  }

  createUser(newUser: User): void {
    this.httpClient.post<User>(environment.baseApiUrl + 'users', newUser).pipe(
      mergeMap(user => this.users$.pipe(
        take(1),
        map(arr => [...arr, user]))
      )
    ).subscribe({
      next: newArr =>  this._users$.next(newArr)
    })
  }
  
  editUser(id:string, editedUser: User): void {
    this.httpClient.put(environment.baseApiUrl + 'users/' + id, editedUser).subscribe({
      next: () => this.loadUsers()
    })
  }

  deleteUser(user: User): void {
    this.httpClient.delete(environment.baseApiUrl + 'users/' + user.id)
    .subscribe({
      next: () => this.loadUsers()
    })
  }
}
