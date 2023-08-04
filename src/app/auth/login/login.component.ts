import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public emailControl = new FormControl('', [Validators.required, Validators.email])
  public passwordControl = new FormControl('', [Validators.required])

  public loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  })

  constructor ( private authService: AuthService) {}

  handleOnLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      console.log('no');
      
    }else{
      console.log('si');
      this.authService.login(this.loginForm.getRawValue())
    }
  }
}
