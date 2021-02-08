import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const coreRoutes: Routes = [

    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: DashboardComponent },
    { path: 'login', component: SigninComponent },
    { path:'dashboard', component: DashboardComponent},
    { path: 'Signup', component: SignupComponent },
    { path: 'browse', loadChildren: '../search-result/search-result.module#SearchResultModule' },
    { path: 'cart', component: CartComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }

];


@NgModule({

    imports: [
        RouterModule.forRoot(coreRoutes)
    ],

    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule { }