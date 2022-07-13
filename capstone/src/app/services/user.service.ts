import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthData } from '../interfaces/iauth-data';
import { IUser } from '../interfaces/iuser';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, from, of, concatMap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUserWithToken } from '../interfaces/iuser-with-token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:4201/';

  jwtHelper = new JwtHelperService();
  autoLogoutTimer: any

  private loggedUser = new BehaviorSubject<null | IUserWithToken>(null);
  loggedObs = this.loggedUser.asObservable();

  constructor(private http: HttpClient, private router: Router) {
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
    this.autoLogout(user.accessToken)
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
        this.autoLogout(res.accessToken)
        this.loggedUser.next(res);
      }),
      catchError(() => of(true))
    );
  }

  logout(navData?: boolean) {
    localStorage.removeItem('user');
    this.loggedUser.next(null);
    this.router.navigate([''], {state: {data: navData}})
  }

  editUser(id: number, userData: IUser) {
    return this.http.patch<IUser>(this.apiUrl + 'users/' + id, userData).pipe(
      tap((res: any) => {
        const user: IUserWithToken = {
          accessToken: JSON.parse(localStorage.getItem('user')!).accessToken,
          user: res
        }
        localStorage.setItem('user', JSON.stringify(user))
        this.loggedUser.next(user)
      }),
      catchError(() => of(false))
    );
  }

  getUser(id: number) {
    return this.http.get(this.apiUrl + 'users/' + id).pipe(
      catchError(() => of(false))
    )
  }

  getSpecificUsers(ids: number[]) {
    return from(ids).pipe(
      concatMap((id) => this.http.get(this.apiUrl + 'users/' + id))
    );
  }

  getUsers() {
    return this.http.get(this.apiUrl + 'users')
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiUrl + 'users/' + id)
  }

  autoLogout(at: string) {
    const exDate = this.jwtHelper.getTokenExpirationDate(at) as Date;
    const exMs = exDate.getTime() - new Date().getTime()

    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, exMs)
  }

}
