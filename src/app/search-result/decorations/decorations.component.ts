import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Decoration } from '../models/rawData.data';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent implements OnInit {

  decorationsList: Array<any>;
  decorationsList2: Array<Decoration>;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.decorationsList = [

      "Stage Decoration",
      "Hall Decoration",
      "Ground Decoration",
      "Open Decoration",
      "Flower Decoration"
    ];

    this.decorationsList2 = [
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
      },
      {
        id: "203",
        name: "Stage Decoration",
        description: "This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.",
        decorationSize: "MEDIUM",
        price: 4000,
        eventType: ["Marriage", "Event"],
        rId: "r203"
      },
      {
        id: "204",
        name: "Hall Decoration",
        description: "This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.",
        decorationSize: "LARGE",
        price: 6000,
        eventType: ["Marriage", "Event"],
        rId: "r204"
      },
      {
        id: "205",
        name: "Welcome Decoration",
        description: "This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.This is description about the decoration which we provide.",
        decorationSize: "LARGE",
        price: 7000,
        eventType: ["Marriage", "Event"],
        rId: "r205"
      },

    ];
  }

  addDecorationToCart(decoration: any) {

    this.cartService.addDecoration(decoration);
  }

}
