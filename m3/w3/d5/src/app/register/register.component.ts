import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  authData = {
    email: '',
    password: '',
  };

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {}

  register() {
    this.userSrv.registerUser(this.authData).subscribe();
  }
}
