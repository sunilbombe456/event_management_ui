import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Venue } from '../models/rawData.data';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venuesList: Array<any>;
  venuesList2: Array<any>;

  constructor(private cartService: CartService) { }



  ngOnInit(): void {


    this.venuesList2 = [
      {
        id: '101',
        name: "Ganraj Mangal Karyala",
        address: {
          state: "Maharashtra",
          district: "Pune",
          taluka: "Ambegaon",
          localAddress: "Awasari"
        },
        rate: "15,000",
        rId: "r101",
        eventType: ["Marriage",],
        peopleCapacity: "500"
      },
      {
        id: "102",
        name: "Niluphule Halls",
        address: {
          state: "Maharashtra",
          district: "Pune",
          taluka: "Ambegaon",
          localAddress: "Awasari"
        },
        rate: "15,000",
        rId: "r102",
        eventType: ["Marriage",],
        peopleCapacity: "500"
      },
      {
        id: "103",
        name: "Love Events",
        address: {
          state: "Maharashtra",
          district: "Pune",
          taluka: "Ambegaon",
          localAddress: "Awasari"
        },
        rate: "15,000",
        rId: "r103",
        eventType: ["Marriage",],
        peopleCapacity: "500"
      },
      {
        id: "104",
        name: "ABM Karyalaya",
        address: {
          state: "Maharashtra",
          district: "Pune",
          taluka: "Ambegaon",
          localAddress: "Awasari"
        },
        rate: "15,000",
        rId: "r104",
        eventType: ["Marriage",],
        peopleCapacity: "500"
      }

    ];

  }

  addVenueToCart(venue: any) {
    this.cartService.addVenue(venue);
  }

}
