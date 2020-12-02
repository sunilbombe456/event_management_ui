import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchResultModule } from '../search-result/search-result.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { CoreRoutingModule } from './core.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({

    declarations: [
        HeaderComponent,
        FooterComponent,
        SigninComponent,
        SignupComponent,
        DashboardComponent,
        CartComponent,
        ProfileComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        SearchResultModule,
        SharedModule
    ],

    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule { }