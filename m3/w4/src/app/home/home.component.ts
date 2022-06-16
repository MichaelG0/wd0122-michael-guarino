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
  isLoading: boolean = false

  constructor(private postsSrv: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true
    this.postsSrv.getPosts().subscribe((res) => {
      this.posts = res.reverse();
      this.isLoading = false
    });
  }

  // getPost(id: number) {
  //   this.postsSrv.getPost(id).subscribe((res: any) => {
  //     this.post = res;
  //   });
  // }

}
