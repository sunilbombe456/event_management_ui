import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DecorationsComponent } from './decorations/decorations.component';
import { FoodsComponent } from './foods/foods.component';
import { OthersComponent } from './others/others.component';
import { ResultHomeComponent } from './result-home/result-home.component';
import { SearchResultRoutingModule } from './search-result.routing.module';
import { VenuesComponent } from './venues/venues.component';

@NgModule({
    declarations: [
        ResultHomeComponent,
        VenuesComponent,
        DecorationsComponent,
        FoodsComponent,
        OthersComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SearchResultRoutingModule
    ]
})
export class SearchResultModule { }