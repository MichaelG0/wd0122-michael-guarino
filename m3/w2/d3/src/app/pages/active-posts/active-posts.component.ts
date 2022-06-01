import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { getPosts, setPosts } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  activePosts!: Post[]

  constructor() {
  }
  
  ngOnInit(): void {
    getPosts()
    .then(res => {
      this.activePosts = res.filter((piru:Post) => piru.active)
    })
  }

  deactivatePost(id:number){
    this.activePosts = setPosts(id).filter((p:Post) => p.active)
  }

}
