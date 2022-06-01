import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { getPosts } from 'src/app/post.service';
import { ToggleService } from 'src/app/toggle.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

  posts!: Post[]
  toggle!: void

  constructor(private toggleService: ToggleService) {
    getPosts()
    .then(res => {
      this.posts = res.filter((piru:Post) => !piru.active)
    })
  }

  
  ngOnInit(): void {
    this.toggle = this.toggleService.toggle()
  }

}
