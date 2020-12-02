import { Injectable } from '@angular/core';
import { SearchFilterModel } from '../models/SearchFilters.model';

@Injectable({
    providedIn: 'root'
})
export class SearchFilterService {

    searchEntity: any;

    constructor() { }

    setSearchEntity(values: any) {


        this.searchEntity = values;

        console.log("service entity values set successfully !");

    }
}