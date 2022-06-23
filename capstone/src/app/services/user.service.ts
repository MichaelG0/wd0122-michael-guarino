import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlRegister = 'http://localhost:4201/register'
  apiUrlLogin = 'http://localhost:4201/login'

  constructor(private http: HttpClient) { }

  signUp(user: IUser){
    return this.http.post(this.apiUrlRegister, user)
  }

  // login(user: IUser){
  //   return this.http.get(this.apiUrlLogin, user)
  // }
}
