import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken(token: string) {
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      console.log(atob(token.split('.')[1]));
      return tokenData;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  getUserId(){
    return localStorage.getItem('user_id');
  }
  getFullname(){
    return localStorage.getItem('fullname');
  }

  getUserData() {
    const token = this.getToken();
    if (token) {
      return this.decodeToken(token);
    }
  }
}
