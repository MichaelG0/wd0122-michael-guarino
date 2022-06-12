import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:4201/login';

  login(authData: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, authData);
  }

  logUser(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    // return true;
  }

  isUserLogged() {
    return localStorage.getItem('token') != null;
  }
}
