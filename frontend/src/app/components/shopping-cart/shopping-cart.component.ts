import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Flower } from 'src/app/common/flower';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems:CartItem[]=[];
  totalPrice:number=0;
  totalQuantity:number=0;
  constructor(private cartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.listCartDetails()
  }
  listCartDetails() {
    this.cartItems=this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(
      data=>this.totalPrice=data
    )
    this.cartService.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    )

    this.cartService.computeCartTotals();
  }
  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }
  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }
}
