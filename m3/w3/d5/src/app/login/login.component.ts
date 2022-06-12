import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authData: User = {
    email: 'admin@admin.it',
    password: 'password',
  };

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authSrv.login(this.authData).subscribe((res: any) => {
      // console.log(res);
      this.authSrv.logUser(res.accessToken);
    });
  }
}
