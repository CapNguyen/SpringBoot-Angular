import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../../models/request/authentication-request';
import { AuthenticationResponse } from '../../../models/response/authentication-response';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { VerificationRequest } from '../../../models/request/verification-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  authenticate() {
    this.authService.authenticate(this.authRequest).subscribe({
      next: (response) => {
        this.authResponse = response;
        if (!this.authResponse.mfaEnabled) {
          localStorage.setItem('token', response.accessToken as string);
          localStorage.setItem('user_id', response.user_id as string);
          localStorage.setItem('fullname', response.fullname as string);
          if (response.role == 'LECTURER') {
            this.router.navigate(['/lecturer/schedule']);
          }
          if (response.role == 'STUDENT') {
            this.router.navigate(['/student/timetable']);
          }
          // this.router.navigate(['/welcome']);
        }
      },
    });
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode,
    };
    this.authService.verifyCode(verifyRequest).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken as string);
        localStorage.setItem('user_id', response.user_id as string);
        localStorage.setItem('fullname', response.fullname as string);
        if (response.role == 'LECTURER') {
          this.router.navigate(['/lecturer/schedule']);
        }
        if (response.role == 'STUDENT') {
          this.router.navigate(['/student/timetable']);
        }
        //this.router.navigate(['welcome']);
      },
    });
  }
}
