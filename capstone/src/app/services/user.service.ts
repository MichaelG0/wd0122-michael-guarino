import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthData } from '../interfaces/iauth-data';
import { IUser } from '../interfaces/iuser';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUserWithToken } from '../interfaces/iuser-with-token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:4201/';

  jwtHelper = new JwtHelperService();

  private loggedUser = new BehaviorSubject<null | IUserWithToken>(null);
  loggedObs = this.loggedUser.asObservable();

  constructor(private http: HttpClient) {
    this.restore();
  }

  restore() {
    let userJson = localStorage.getItem('user');
    if (!userJson)
      return;
    const user: IUserWithToken = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      this.logout();
      return;
    }
    this.loggedUser.next(user);
  }

  signUp(user: IUser) {
    return this.http.post<IUserWithToken>(this.apiUrl + 'register', user).pipe(
      tap((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.loggedUser.next(res);
      })
    );
  }

  login(authData: IAuthData) {
    return this.http.post<IUserWithToken>(this.apiUrl + 'login', authData).pipe(
      tap((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.loggedUser.next(res);
      }),
      catchError(() => of(true))
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedUser.next(null);
  }

}
