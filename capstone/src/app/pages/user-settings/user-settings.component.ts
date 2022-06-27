import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  genForm!: FormGroup;
  pswForm!: FormGroup;
  page: number = 1
  loggedUser: null | IUserWithToken = null
  loading: boolean = false

  constructor(private userSrv: UserService, private postSrv: PostService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.loggedUser = res;
    })
    this.genForm = this.fb.group({
      username: [this.loggedUser?.user.username, [Validators.required, Validators.pattern('^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9_]{3,20}$')]],
      email: [this.loggedUser?.user.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      name: [this.loggedUser?.user.name],
      surname: [this.loggedUser?.user.surname]
    });
    this.pswForm = this.fb.group({
      curPsw: ['', [Validators.required, Validators.minLength(8)]],
      newPsw: ['', [Validators.required, Validators.minLength(8)]],
      confPsw: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(form: FormGroup) {
    const curUsername = this.loggedUser!.user.username
    if (form.valid) {
      const user: IUser = {
        username: form.value.username,
        email: form.value.email,
        name: form.value.name,
        surname: form.value.surname,
      };
      this.loading = true
      this.userSrv.editUser(this.loggedUser!.user.id, user).subscribe(() => {
        this.postSrv.getPosts().subscribe((posts: any) => {
          for (let post of posts) {
            if (post.user === curUsername) {
              this.postSrv.editPostsOnUserEdit(post.id, {user: this.loggedUser!.user.username}).subscribe(() => {
                this.loading = false
              })
            }
          }
        })
      })
    }
  }

}
