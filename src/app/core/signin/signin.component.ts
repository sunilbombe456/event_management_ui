import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventManagementApiService } from '../../services/event-management-api.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,private tokenStorageService:TokenStorageService, private apiService: EventManagementApiService) { }

  ngOnInit(): void {
  }
  
 
  loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });




  onSubmit(){
    console.log("form data====> ");
    console.log(this.loginForm.value);
   this.apiService.signInAccount(this.loginForm.value).subscribe(
     (response:any)=>{
       if(response!=undefined){
         console.log(response);
      //   this.token= response;
      //   this.loggedIn= true;
      //  // this.apiService.setLoggedIn(this.loggedIn,this.token);
      //   const userData = {
      //           token: this.token
      //       };
      //       localStorage.setItem('user', JSON.stringify(userData));
      //       this.router.navigateByUrl('/dashboard');
       }
     },(err)=>{
       alert(err.message);
     }
   );
  }


}
