import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrlRegister: string = 'http://localhost:4201/register';
  apiUrl: string = 'http://localhost:4201/users';

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post(this.apiUrlRegister, user);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id); //'http://localhost:4201/users/1'
  }
}
