import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthData } from 'src/app/interfaces/iauth-data';
import { UserService } from 'src/app/services/user.service';
declare var bootstrap: any;

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;
  btnClicked: boolean = false;
  loginFailed: boolean = false;
  loading: boolean = false

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
    if (form.valid) {
      this.loading = true
      const authData: IAuthData = {
        email: form.value.email,
        password: form.value.password,
      };
      this.userSrv.login(authData).subscribe((res: any) => {
        if (res === true)
          this.loginFailed = res;
        else if (typeof res === 'object'){
          const lgnMdlEl = document.querySelector('#exampleModalToggle2')
          const loginModal = bootstrap.Modal.getInstance(lgnMdlEl)
          loginModal.hide()
        }
        this.loading = false
      });
    }
  }

}
