import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventManagementApiService } from '../../services/event-management-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private apiService: EventManagementApiService) { }
  ngOnInit(): void {
  }

}
