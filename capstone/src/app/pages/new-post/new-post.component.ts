import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/ipost';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm!: FormGroup;
  loggedUser: null | IUserWithToken = null

  constructor(private postSrv: PostService, private userSrv: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.loggedUser = res;
    })

    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      caption: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit (form: FormGroup) {
    if (form.valid){
      const post: IPost = {
        title: form.value.title,
        caption: form.value.caption,
        user: this.loggedUser?.user.username
      };
      this.postSrv.newPost(post).subscribe(() => {
        this.router.navigate(['/'])
      })
    }
  }

}
