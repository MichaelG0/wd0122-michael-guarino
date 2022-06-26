import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User = new User
  loggedUser: null | IUserWithToken = null

  constructor(private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res)=>{
      this.loggedUser = res;
    })
  }

  logout(){
    this.userSrv.logout()
    this.router.navigate(['/'])
  }

}
