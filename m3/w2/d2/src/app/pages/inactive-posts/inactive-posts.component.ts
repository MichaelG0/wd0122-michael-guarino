import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { getPosts } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts!: Post[]

  constructor() {
    getPosts()
    .then(res => {
      this.posts = res.filter((piru:Post) => !piru.active)
    })
  }

  ngOnInit(): void {
  }

}
