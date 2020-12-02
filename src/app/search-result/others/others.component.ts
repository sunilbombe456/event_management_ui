import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  othersList: Array<any>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.othersList = [
      "Other",
      "Other",
      "Other",
      "Other",
      "Other",
      "Other",
      "Other",
      "Other",
      "Other",

    ];
  }

  addOtherToCart(other: any) {

    this.cartService.addOther(other);
  }

}
