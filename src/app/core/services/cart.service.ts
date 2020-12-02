import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() { }

    myEvent: {
        venue?: Array<any>,
        decoration?: Array<any>,
        food?: {
            starters?: Array<any>,
            mainCourse?: Array<any>,
            sweet?: Array<any>,
            iceCream?: Array<any>
        },
        other?: Array<any>;
    };

    getMyEvent() {

        return this.myEvent;
    }

    addVenue(venue: any) {

        this.myEvent.venue.push(venue);
    }

    addDecoration(decoration: any) {

        this.myEvent.decoration.push(decoration);
    }
    addStarterFood(starter: any) {

        this.myEvent.food.starters.push(starter);
    }
    addMainCourseFood(mainCourseFood: any) {

        this.myEvent.food.mainCourse.push(mainCourseFood);
    }

    addIceCreamFood(iceCream: any) {

        this.myEvent.food.iceCream.push(iceCream);
    }
    addSweetFood(sweet: any) {

        this.myEvent.food.sweet.push(sweet);
    }

    addOther(other: any) {

        this.myEvent.other.push(other);
    }



}