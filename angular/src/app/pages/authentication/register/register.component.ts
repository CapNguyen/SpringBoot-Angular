import { Component } from '@angular/core';
import { RegisterRequest } from '../../../models/request/register-request';
import { AuthenticationResponse } from '../../../models/response/authentication-response';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Router } from '@angular/router';
import { VerificationRequest } from '../../../models/request/verification-request';
import { Campus } from 'src/app/models/Campus';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  campusses?: Campus[];
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest).subscribe({
      next: (response) => {
        if (response) {
          this.authResponse = response;
        } else {
          this.message =
            'Account created successfully\nYou will be redirected to the Login page soon';
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 1000);
        }
      },
    });
  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode,
    };
    this.authService.verifyCode(verifyRequest).subscribe({
      next: (response) => {
        this.message =
          'Account created successfully\nYou will be redirected to the Welcome page soon';
        setTimeout(() => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['welcome']);
        }, 1000);
      },
    });
  }
}
