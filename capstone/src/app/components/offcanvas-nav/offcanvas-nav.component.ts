import { Component, OnInit } from '@angular/core';
import { IUserWithToken } from 'src/app/interfaces/iuser-with-token';
import { UserService } from 'src/app/services/user.service';
declare var bootstrap: any;

@Component({
  selector: 'app-offcanvas-nav',
  templateUrl: './offcanvas-nav.component.html',
  styleUrls: ['./offcanvas-nav.component.scss'],
})
export class OffcanvasNavComponent implements OnInit {
  loggedUser: null | IUserWithToken = null;

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.userSrv.loggedObs.subscribe((res) => {
      this.loggedUser = res;
    });
  }

  closeOffcanvas() {
    const offcNavEl = document.querySelector('#offcanvasNav');
    const offcanvasNav = bootstrap.Offcanvas.getInstance(offcNavEl);
    offcanvasNav.hide();
  }

  onResizeDismiss() {
    const offcNavEl = document.querySelector('#offcanvasNav');
    const offcanvasNav = bootstrap.Offcanvas.getInstance(offcNavEl);
    if (offcanvasNav && window.innerWidth >= 992) offcanvasNav.hide();
  }
}
