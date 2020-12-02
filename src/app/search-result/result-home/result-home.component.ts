import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalConstants } from 'src/app/core/global.constants';
import { SearchFilterService } from '../services/searchFilters.service';

@Component({
  selector: 'app-result-home',
  templateUrl: './result-home.component.html',
  styleUrls: ['./result-home.component.css'],
  providers: [DatePipe]
})
export class ResultHomeComponent implements OnInit {

  inputMinDate = "";
  filtersForm: FormGroup;

  constructor(private datePipe: DatePipe, private searchFilterService: SearchFilterService) { }

  showFilters = false;

  ngOnInit(): void {

    this.inputMinDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");

    this.filtersForm = new FormGroup({
      eventType: new FormControl('--- All ---'),
      date: new FormControl(),
      location: new FormControl(),
      peopleCount: new FormControl('--- Any ---')
    });

  }

  onClickShowFilters() {

    this.showFilters = true;
  }

  onCloseShowFilters() {

    this.showFilters = false;
  }

  onSaveFilters() {

    this.showFilters = false;
    console.log(this.filtersForm.value);
    this.searchFilterService.setSearchEntity(this.filtersForm.value);
    console.log("Set value --" + this.searchFilterService.searchEntity.location);
  }
}
