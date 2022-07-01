import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/ipost';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  id!: number;
  username!: string;
  posts!: IPost[];

  constructor(private userSrv: UserService, private postSrv: PostService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;
    });
    this.getUserPosts();
    this.getUser();
  }

  getUser() {
    this.userSrv.getUser(this.id).subscribe((res: any) => {
      if (res) this.username = res.username;
      else this.router.navigate(['/'])
    });
  }

  getUserPosts() {
    this.postSrv.getPosts().subscribe((res: any) => {
      res = res.filter((post: IPost) => post.userid == this.id)
      this.posts = res.reverse();
    });
  }
}
