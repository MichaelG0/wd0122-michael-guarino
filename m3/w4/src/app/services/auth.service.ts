import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Iauthdata } from '../interfaces/iauthdata';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:4201/login';
  jwtHelper = new JwtHelperService()

  constructor(private http: HttpClient) { }

  login(authData: Iauthdata): Observable<Iauthdata> {
    return this.http.post<Iauthdata>(this.apiUrl, authData)
  }

  logUser(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  isUserLogged(){
    return localStorage.getItem('token') != null
  }
}
