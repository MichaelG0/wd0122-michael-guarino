import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthData } from 'src/app/interfaces/iauth-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;
  btnClicked: boolean = false;
  loginFailed: boolean = false;

  constructor(private userSrv: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.btnClicked = false;
    this.loginFailed = false
    this.loginForm = this.fb.group({
      email: ['admin@admin.it', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: ['adminadmin', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    if (form.valid) {
      const authData: IAuthData = {
        email: form.value.email,
        password: form.value.password,
      };
      this.userSrv.login(authData).subscribe((res: any) => {
        if (res === true)
          this.loginFailed = res;
        // if (res){
        //   const myModal = new bootstrap.Modal(document.getElementById('myModal'))
        //   myModal.hide()
        // }
      });
    }
  }

}
