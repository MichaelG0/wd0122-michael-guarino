import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  post!: Post;

  constructor(private postsSrv: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsSrv.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  getPost(id: number) {
    this.postsSrv.getPost(id).subscribe((res: any) => {
      this.post = res;
    });
  }

}
