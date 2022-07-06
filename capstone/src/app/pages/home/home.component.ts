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
  userIds!: number[]

  constructor(private userSrv: UserService, private postSrv: PostService) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.loggedUser = res;
    })
    this.getUsers()
    this.getPosts()
  }

  getUsers(){
    this.userSrv.getUsers().subscribe((res: any) => {
      const userrIds: number[] = []
      for (let user of res){
        userrIds.push(user.id)
      }
      this.userIds = userrIds
    })
  }

  getPosts(){
    this.postSrv.getPosts().subscribe((res: any) => {
      // I check that the posts' authors still exist
      // const posts = res.filter((post: IPost) => this.userIds.includes(post.userid))
      this.posts = res.reverse()      
    })
  }

}
