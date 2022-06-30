import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  id!: number;
  username!: string

  constructor(private userSrv: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;
    });
    this.getUser();
  }

  getUser() {
    this.userSrv.getUser(this.id).subscribe((res: any) => {
      this.username = res.username;
      
    });
  }
}
