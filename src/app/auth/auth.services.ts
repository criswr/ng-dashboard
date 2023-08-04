import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { User } from "../dashboard/pages/users/users.component";
import { ToastService } from "../core/services/toast/toast.service";
import { Router } from '@angular/router'


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

        ) {}
    login(data: LoginData): void {
        const MOCK_DATA: User = {
            id: 'u5d4a5s1d',
            name: 'Usuario',
            lastname: 'Apellido',
            email: 'nombre@email.com',
            password: '1234',
        }

        if (data.email === MOCK_DATA.email && data.password === MOCK_DATA.password){
            this._authUser$.next(MOCK_DATA)
            this.router.navigate(['/dashboard/home'])
        }else{
            this._authUser$.next(null)
            this.toast.fireToast('Email o contraseña incorrectos')
        }
    }
    
    isAuthenticated(): Observable<boolean> {
        return this.authUser$.pipe(
            take(1),
            map(user => !!user)
        )
    }
}