import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

const routes: Routes = [
  { path: '' , redirectTo: '/Dashboard' , pathMatch : 'full'},
  {path:'Dashboard', component:DashboardComponent},
  {path:'Login', component:SigninComponent },
  {path:'Signup', component:SignupComponent},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
