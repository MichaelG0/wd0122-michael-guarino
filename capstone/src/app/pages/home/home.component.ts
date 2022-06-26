import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedUser: null | IUserWithToken = null
  posts!: IPost[]

  constructor(private userSrv: UserService, private postSrv: PostService) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.loggedUser = res;
    })
    this.getPosts()
  }

  getPosts(){
    this.postSrv.getPosts().subscribe((res: any) => {
      this.posts = res.reverse()      
    })
  }

}
