import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User = new User
  isLoggedIn: boolean = false

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.isLoggedIn = res;
    })
  }

  logout(){
    this.userSrv.logout()
  }

}
