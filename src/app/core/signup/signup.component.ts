import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventManagementApiService } from '../../services/event-management-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private apiService: EventManagementApiService) { }
  ngOnInit(): void {
  }

  private token: string;
  private loggedIn = false;

  signUpForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    userName : new FormControl(),
    password : new FormControl()
  });

  onSubmit(){
    console.log("form data====> ");
    console.log(this.signUpForm.value);
   this.apiService.signUpAccount(this.signUpForm.value).subscribe(
     (response:any)=>{
      //  if(response!=undefined){
      //   this.token= response;
      //   this.loggedIn= true;
      //   this.apiService.setLoggedIn(this.loggedIn,this.token);
      //   const userData = {
      //           token: this.token
      //       };
      //       localStorage.setItem('user', JSON.stringify(userData));
      //       this.router.navigateByUrl('/Dashboard');
      //  }
     },(err)=>{
       alert(err.message);
     }
   );
  }
}
