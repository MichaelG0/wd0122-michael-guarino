import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/interfaces/ipost';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  loggedUser: null | IUserWithToken = null
  @Input() post!: IPost;
  @Input() i!: number;
  postUsername!: string;
  postUserId!: number;
  commentForm!: FormGroup;
  loading: boolean = false;
  comments!: {userid: number, comment: string}[]

  constructor(private userSrv: UserService, private postSrv: PostService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res) => {
      this.loggedUser = res;
    })
    this.getUser();
    this.setForm();
  }

  getUser() {
    this.userSrv.getUser(this.post.userid).subscribe((res: any) => {
      this.postUsername = res.username;
      this.postUserId = res.id;
    });
  }

  setForm() {
    this.loading = false;
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  getComments() {
    this.postSrv.getPost(this.post.id!).subscribe((res: any) => {
      this.comments = res.comments
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      let comments: {userid: number, comment: string}[]
      this.comments ? comments = this.comments.slice() : comments = []
      comments.push({
        userid: this.loggedUser!.user.id,
        comment: form.value.comment
      })
      this.postSrv.newComment(this.post.id!, { comments: comments }).subscribe((res: any) => {
        this.comments = res.comments
        this.setForm()
      });
    }
  }

  autogrow(e: any) {
    const commentBtn = document.getElementById('comment-btn');
    e.target.style.height = '0px';
    e.target.style.height = e.target.scrollHeight + 'px';
    if (parseInt(e.target.style.height) > 180) {
      e.target.style.overflowY = 'scroll';
      commentBtn!.style.right = 10 + 'px';
    } else {
      e.target.style.overflowY = 'hidden';
      commentBtn!.style.right = -4 + 'px';
    }
  }
}
