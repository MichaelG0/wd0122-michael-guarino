import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IPost } from 'src/app/interfaces/ipost';
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
  sucAlert: boolean = false
  warAlert: boolean = false
  case: number = 0
  userPostsIds: number[] = []

  constructor(private userSrv: UserService, private postSrv: PostService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.loggedUser = res;
    })
    this.getUserPosts()
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
    this.sucAlert = false
    this.warAlert = false
    if (form.valid) {
      const userData: IUser = {
        username: form.value.username,
        email: form.value.email,
        name: form.value.name,
        surname: form.value.surname,
      };
      this.loading = true
      this.userSrv.editUser(this.loggedUser!.user.id, userData).subscribe(res => {
        res ? this.sucAlert = true : this.warAlert = true
        this.loading = false
      })
    }
  }

  getUserPosts() {
    const userPostsIds: number[] = []
    this.postSrv.getPosts().subscribe((res: any) => {
      res = res.filter((post: IPost) => post.userid == this.loggedUser!.user.id)
      for (let post of res) {
        userPostsIds.push(post.id);
      }
      this.userPostsIds = userPostsIds
    });
  }

  deleteUser() {
    this.sucAlert = false
    this.loading = true
    const obsArr = [this.userSrv.deleteUser(this.loggedUser!.user.id)]
    if (this.userPostsIds.length > 0) obsArr.push(this.postSrv.deletePosts(this.userPostsIds))
    
    forkJoin(obsArr).subscribe(() => {
      this.sucAlert = true
      this.loading = false
      this.userSrv.logout(this.sucAlert)
    })
  }

}
