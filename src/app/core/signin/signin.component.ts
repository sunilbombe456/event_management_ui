import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    form: FormGroup;
    isLoggedIn = false;
    loading = false;
    submitted = false;
    returnUrl = '/dashboard';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private alertService: AlertService,
    private tokenStorageService: TokenStorageService
  ) {


  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn){
      this.router.navigate(['/dashboard']);
    }
    this.form = new FormGroup({
      userName : new FormControl(''),
      password : new FormControl('')
    });

  }

 // convenience getter for easy access to form fields
 get f() { return this.form.controls; }


  onSubmit(): void{
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    console.log(this.form.value);
    this.loading = true;
    this.accountService.login(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                   window.location.reload();
                },
                error => {
                    this.alertService.error(error.value);
                    this.loading = false;
                });

  //  this.accountService.login(this.form.value).subscribe(
  //    (response:any)=>{
  //      if(response!=undefined){

  //     //   this.token= response;
  //     //   this.loggedIn= true;
  //     //  // this.apiService.setLoggedIn(this.loggedIn,this.token);
  //     //   const userData = {
  //     //           token: this.token
  //     //       };
  //     //       localStorage.setItem('user', JSON.stringify(userData));
  //     //       this.router.navigateByUrl('/dashboard');
  //      }
  //    },(err)=>{
  //      alert(err.message);
  //    }
  //  );
  }


}
