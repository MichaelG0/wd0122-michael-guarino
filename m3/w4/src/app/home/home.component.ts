import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: Post[]

  constructor(private postsSrv: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postsSrv.getPosts().subscribe((res: any) => {
      this.posts = res
      console.log(this.posts);
    })
  }

}
