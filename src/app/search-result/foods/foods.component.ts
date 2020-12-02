import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Food } from '../models/rawData.data';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foodsList: Array<any>;
  foodsList2: Array<any>;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.foodsList = [

      "Paneer Masala",
      "Roti",
      "Rice",
      "Dal",
      "Chinese"
    ];

    this.foodsList2 = [

      {
        id: "301",
        name: "Paneer Masala",
        price: 50,
        foodType: ["VEG", "MAIN_COURSE"],
        rid: "r301"
      },
      {
        id: "302",
        name: "Baigan Masala",
        price: 60,
        foodType: ["VEG", "MAIN_COURSE"],
        rid: "r302"
      },
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
        id: "305",
        name: "Masala Papad",
        price: 48,
        foodType: ["VEG", "STARTER"],
        rid: "r305"
      },
      {
        id: "306",
        name: "Soyabin Chilli",
        price: 52,
        foodType: ["VEG", "STARTER"],
        rid: "r306"
      },
      {
        id: "307",
        name: "Rabadi",
        price: 40,
        foodType: ["VEG", "SWEET"],
        rid: "r307"
      },
      {
        id: "308",
        name: "Shira",
        price: 50,
        foodType: ["VEG", "SWEET"],
        rid: "r308"
      },

      {
        id: "309",
        name: "Gulab Jamun",
        price: 35,
        foodType: ["VEG", "SWEET"],
        rid: "r309"
      },
      {
        id: "310",
        name: "Cone",
        price: 25,
        foodType: ["VEG", "ICE_CREAM"],
        rid: "r310"
      },
      {
        id: "311",
        name: "Sprite",
        price: 20,
        foodType: ["VEG", "ICE_CREAM"],
        rid: "r311"
      },
      {
        id: "312",
        name: "Vanila",
        price: 20,
        foodType: ["VEG", "ICE_CREAM"],
        rid: "r312"
      },

    ];
  }

  addFoodToCart(index: number) {

    console.log(this.foodsList2[index]);

    for (let type of this.foodsList2[index].foodType) {

      if (type == "MAIN_COURSE") {

        this.addMainCourseToCart(this.foodsList2[index]);
      } else if (type == "STARTER") {

        this.addStarterToCart(this.foodsList2[index]);
      } else if (type == "SWEET") {

        this.addSweetToCart(this.foodsList2[index]);
      } else if (type == "ICE_CREAM") {

        this.addIceCreamToCart(this.foodsList2[index]);
      }
    }
  }

  addStarterToCart(starter: any) {

    this.cartService.addStarterFood(starter);
  }
  addMainCourseToCart(mainCourse: any) {

    this.cartService.addMainCourseFood(mainCourse);
  }
  addSweetToCart(sweet: any) {

    this.cartService.addSweetFood(sweet);
  }
  addIceCreamToCart(iceCream: any) {

    this.cartService.addIceCreamFood(iceCream);
  }


}
