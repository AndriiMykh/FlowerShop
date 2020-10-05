import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Flower } from '../common/flower';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems: Flower[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  constructor() { }
  addToCart(theCartItem: Flower) {
    console.log("cartService:"+theCartItem)

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: Flower = undefined;

    if (this.cartItems.length > 0) {

      existingCartItem=this.cartItems.find(tempCartItem=>tempCartItem.id===theCartItem.id)

      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }
  computeCartTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
  decrementQuantity(theCartItem: Flower) {

    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: Flower) {

    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}