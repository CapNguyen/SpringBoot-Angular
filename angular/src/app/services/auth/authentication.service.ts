import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../models/request/register-request';
import { AuthenticationResponse } from '../../models/response/authentication-response';
import { VerificationRequest } from '../../models/request/verification-request';
import { AuthenticationRequest } from '../../models/request/authentication-request';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/register`,
      registerRequest
    );
  }

  authenticate(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/authenticate`,
      authRequest
    );
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/verify`,
      verificationRequest
    );
  }
}
