import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles, User } from './pages/users/users.component';
import { AuthService } from '../auth/auth.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public authUser$: Observable<User | null>

  constructor (
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.authUser$
  }

  logout(): void {
    this.authService.logout()
  }
  
}
