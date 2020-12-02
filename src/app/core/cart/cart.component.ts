import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myEventData: {
    venue: Array<any>,
    decoration: Array<any>,
    food: {
      starters: Array<any>,
      mainCourse: Array<any>,
      sweet: Array<any>,
      iceCream: Array<any>
    },
    other: Array<any>;
  };

  myVenues: Array<any> = null;
  myDecorations: Array<any> = null;
  myfood: Array<any> = null;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.cartService.getMyEvent());

    this.myVenues = [

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

    this.myDecorations = [

      {
        id: "201",
        name: "Stage Decoration",
        description: "This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.",
        decorationSize: "MEDIUM",
        price: 4000,
        eventType: ["Marriage", "Event"],
        rId: "r201"
      },
      {
        id: "202",
        name: "lawn Decoration",
        description: "This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.",
        decorationSize: "MEDIUM",
        price: 4000,
        eventType: ["Marriage", "Event"],
        rId: "r202"
      }
    ];

    this.myfood = [

      {
        id: "303",
        name: "Mix Veg",
        price: 55,
        foodType: ["VEG", "MAIN_COURSE"],
        rid: "r303"
      },
      {
        id: "304",
        name: "chinese Noodles",
        price: 40,
        foodType: ["VEG", "STARTER"],
        rid: "r304"
      },
      {
        id: "310",
        name: "Cone",
        price: 25,
        foodType: ["VEG", "ICE_CREAM"],
        rid: "r310"
      }
    ];
  }

  removeVenue(index: number) {

    if (confirm("Are You Sure ?")) {

      this.myVenues.splice(index, 1);
    }
  }

  removeDecoration(index: number) {

    if (confirm("Are You Sure ?")) {

      this.myDecorations.splice(index, 1);
    }
  }

  removeFood(index: number) {

    if (confirm("Are You Sure ?")) {

      this.myfood.splice(index, 1);
    }
  }

}
