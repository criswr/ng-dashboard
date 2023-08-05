import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { User } from "../dashboard/pages/users/users.component";
import { ToastService } from "../core/services/toast/toast.service";
import { Router } from '@angular/router'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environment/environment";


interface LoginData {
    email: string | null,
    password: string | null
}

@Injectable({ providedIn: 'root'})

export class AuthService {
    private _authUser$ = new BehaviorSubject<User|null>(null)
    public authUser$ = this._authUser$.asObservable()

    constructor (
        private toast: ToastService,
        private router: Router,
        private httpClient: HttpClient
        ) {}
    login(data: LoginData): void {
        this.httpClient.get<User[]>(environment.baseApiUrl + 'users', {
            params: {
                email: data.email || '',
                password: data.password || ''
            }
          }).subscribe({
            next: res => {
                if (res.length) {
                    const authUser = res[0]
                    this._authUser$.next(authUser)
                    this.router.navigate(['/dashboard/home'])
                    localStorage.setItem('token', authUser.token)
                } else {
                    this.toast.fireToast('Email o contraseña incorrectos')
                    this._authUser$.next(null)
                    console.log(res);
                    
                }
            },
            error: err => {
                if (err instanceof HttpErrorResponse) {
                    let message = 'Ocurrió un error'
                    if (err.status === 401) message = 'Email o contraseña incorrectos'
                    this.toast.fireToast(message)
                }
            }
        })
    }
    
    isAuthenticated(): Observable<boolean> {
        return this.httpClient.get<User[]>(environment.baseApiUrl + 'users', {
            params: { token: localStorage.getItem('token') || '' }
        })
        .pipe(map(res => !!res.length))
    }
}