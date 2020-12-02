import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecorationsComponent } from './decorations/decorations.component';
import { FoodsComponent } from './foods/foods.component';
import { OthersComponent } from './others/others.component';
import { ResultHomeComponent } from './result-home/result-home.component';
import { VenuesComponent } from './venues/venues.component';

const searchResultRoutes: Routes = [
    {
        path: '', component: ResultHomeComponent, children: [

            //{ path: '', redirectTo: '/venues', pathMatch: 'full' },
            { path: '', component: VenuesComponent },
            { path: 'decoration', component: DecorationsComponent },
            { path: 'food', component: FoodsComponent },
            { path: 'other', component: OthersComponent }


        ]
    }
];

@NgModule({

    imports: [RouterModule.forChild(searchResultRoutes)],
    exports: [
        RouterModule
    ]
})
export class SearchResultRoutingModule { }