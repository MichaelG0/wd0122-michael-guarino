import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import { Icomment } from 'src/app/interfaces/icomment';
import { IPost } from 'src/app/interfaces/ipost';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
TimeAgo.addDefaultLocale(en)

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
  comments: Icomment[] = []
  loading: boolean = false;
  funcCalled: boolean = false
  timeAgo = new TimeAgo('en-US')
  postTiming!: string

  constructor(private userSrv: UserService, private postSrv: PostService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res) => {
      this.loggedUser = res;
    })
    this.getUser();
    this.postTiming = this.timeAgo.format(new Date(this.post.date).getTime())
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
  
  getCommentsUsers() {
    if (!this.funcCalled && this.post.comments && this.post.comments != []) {
      let i = 0
      this.comments = JSON.parse(JSON.stringify(this.post.comments));
      const ids = this.post.comments!.map((a: Icomment) => a.userid);

      this.userSrv.getSpecificUsers(ids).subscribe((res: any) => {
        this.comments![i].username = res.username
        i++
        console.log(this.post.comments);
      })
      this.funcCalled = true
    }
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      if (!this.post.comments) this.post.comments = []
      const newComm = {
        userid: this.loggedUser!.user.id,
        comment: form.value.comment
      }
      this.post.comments.push(newComm)

      this.postSrv.newComment(this.post.id!, { comments: this.post.comments }).subscribe(() => {
        this.comments.push(newComm)
        this.comments[this.comments.length - 1].username = this.loggedUser!.user.username
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
