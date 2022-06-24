import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts!: IPost[]

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postSrv.getPosts().subscribe((res: any) => {
      this.posts = res.reverse()      
    })
  }

}
