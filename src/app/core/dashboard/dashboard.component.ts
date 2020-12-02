import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchFilterService } from 'src/app/search-result/services/searchFilters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  inputMinDate = "";
  searchEntity: FormGroup;

  constructor(private datePipe: DatePipe, private searchFilterService: SearchFilterService, private router: Router) { }

  ngOnInit(): void {
    this.inputMinDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");

    this.searchEntity = new FormGroup({
      eventType: new FormControl('Select Event'),
      date: new FormControl(''),
      peopleCount: new FormControl('Select People Count')

    });

  }

  onSubmitSearch() {
    console.log(this.searchEntity.value);
    this.searchFilterService.setSearchEntity(this.searchEntity.value);
    this.router.navigate(['browse']);
  }

}
