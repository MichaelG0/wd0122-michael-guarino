import { Component, OnInit } from '@angular/core';
import { Iauthdata } from 'src/app/interfaces/iauthdata';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: User = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  };

  auth: Iauthdata = {
    email: 'admin@admin.it',
    password: 'admin',
  };

  name: string = ''

  constructor(private userSrv: UsersService, private authSrv: AuthService) {}

  ngOnInit(): void {
  }
  
  login() {
    this.authSrv.login(this.auth).subscribe((res: any) => {
      this.authSrv.logUser(res.accessToken, res.user);
      this.getName()
    });
  }

  signup() {
    this.userSrv.registerUser(this.user).subscribe();
  }

  logout(){
    this.authSrv.logout()
  }

  getName(){
    let user: any = localStorage.getItem('user')
    this.name = JSON.parse(user).name
  }

  isUserLogged(){
    return this.authSrv.isUserLogged()
  }
}
