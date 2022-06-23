import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthData } from '../interfaces/iauth-data';
import { IUser } from '../interfaces/iuser';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:4201/';

  jwtHelper = new JwtHelperService();

  private loggedUser = new BehaviorSubject<boolean>(false);
  loggedObs = this.loggedUser.asObservable();

  constructor(private http: HttpClient) {
    this.restore();
  }

  restore() {
    let userJson = localStorage.getItem('user');
    if (!userJson)
      return;
    const user: { accessToken: string; user: IUser } = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      this.logout();
      return;
    }
    this.loggedUser.next(true);
  }

  signUp(user: IUser) {
    return this.http.post(this.apiUrl + 'register', user).pipe(
      tap((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.loggedUser.next(true);
      })
    );
  }

  login(authData: IAuthData) {
    return this.http.post(this.apiUrl + 'login', authData).pipe(
      tap((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.loggedUser.next(true);
      }),
      catchError(() => of(true))
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedUser.next(false);
  }
}
