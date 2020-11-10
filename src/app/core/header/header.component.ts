import { Component, OnInit } from '@angular/core';
import { EventManagementApiService } from '../../services/event-management-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private eventManagementApiService: EventManagementApiService) { }

  ngOnInit(): void {
  }

  loggedIn = this.eventManagementApiService.isLoggedIn;



}
