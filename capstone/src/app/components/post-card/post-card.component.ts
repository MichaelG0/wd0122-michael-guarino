import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post!: IPost
  @Input() i!: number
  postUsername!: string
  postUserId!: number

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userSrv.getUser(this.post.userid).subscribe((res: any) => {
      this.postUsername = res.username
      this.postUserId = res.id
    })
  }

  autogrow(e: any){
    e.target.style.height = '0px';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

}
