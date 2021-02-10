import { Component, OnInit } from '@angular/core';
import {  TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  showEmployeeBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    // console.log('isLogged in status' + this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = JSON.parse(this.tokenStorageService.getUser());
      this.showAdminBoard = user.roles.includes('ROLE_ADMIN');
      this.showEmployeeBoard = user.roles.includes('ROLE_EMPLOYEE');
      // this.showAdminBoard = user.roles.includes('ROLE_ADMIN')
      this.username = user.username;
    }

   }

  ngOnInit(): void {

  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
