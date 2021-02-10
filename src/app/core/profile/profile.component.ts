import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = null;
  isloggedIn = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private accountService: AccountService ) {
    this.user = JSON.parse(this.tokenStorageService.getUser());
    this.isloggedIn = !!tokenStorageService.getToken();
    if(!this.isloggedIn){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {

    this.accountService.getById(this.user.id)
    .subscribe(
      (result: User) => {
        this.user = result;
      },
      error => {
        console.log(error.message);
      });


  }

}
