import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser!: User

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.userSrv.getUser(2).subscribe((res: User) => {
      this.currentUser = res
    });
  }

}
