import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventManagementApiService {

  constructor(private http :HttpClient ) { }

  private loggedIn = false;
  private token: string;


  
//  httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };
  

  // httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

  signInAccount(userDetail:any){
    return this.http.post("http://localhost:8080/public/event/1/0/authenticate", userDetail,{responseType:'text' as 'json'});
  }
  

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  // login(user) {
  //   if (user.email !== '' && user.password !== '' ) {
  //     return this.server.request('POST', '/login', {
  //       email: user.email,
  //       password: user.password
  //     }).subscribe((response: any) => {
  //       if (response.auth === true && response.token !== undefined) {
  //         this.token = response.token;
  //         this.server.setLoggedIn(true, this.token);
  //         this.loggedIn.next(true);
  //         const userData = {
  //           token: this.token,
  //         };
  //         localStorage.setItem('user', JSON.stringify(userData));
  //         this.router.navigateByUrl('/profile');
  //       }
  //     });
  //   }
  // }

  // logout() {
  //   this.server.setLoggedIn(false);
  //   delete this.token;

  //   this.loggedIn.next(false);
  //   localStorage.clear();
  //   this.router.navigate(['/']);
  // }
//}
}
