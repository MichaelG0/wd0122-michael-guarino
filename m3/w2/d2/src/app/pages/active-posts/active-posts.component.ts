import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { getPosts } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

  posts!: Post[]

  constructor() {
    getPosts()
    .then(res => {
      this.posts = res.filter((piru:Post) => piru.active)
    })
  }

  ngOnInit(): void {
  }

}
