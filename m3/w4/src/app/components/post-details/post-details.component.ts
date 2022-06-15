import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: Post
  edit: boolean = false
  caption!: string;
  liked: boolean = false

  constructor(private postsSrv: PostsService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.caption = this.post.caption
    this.getLikedPosts()
  }

  modificaPost(id: number, caption: string) {
    this.edit = !this.edit
    this.postsSrv.modificaPost(id, { caption: caption }).subscribe((res: any) => {
      console.log(res);
      this.post = res
    });
  }
  
  like() {
    this.liked = !this.liked;
  }

  isUserLogged(){
    return this.authSrv.isUserLogged()
  }
  
  getLikedPosts(): void {
    if (JSON.parse(localStorage.getItem('user')!)){
      const id = JSON.parse(localStorage.getItem('user')!).id
      this.liked = this.post.liked.includes(id)
    }
  }

}
