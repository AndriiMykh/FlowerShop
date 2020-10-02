import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartItem } from 'src/app/common/cart-item';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,private cartService:ShoppingCartService) { }
  cartItems:CartItem[]=[];
  total:number=0;
  date: Date = new Date;
  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      deliveryAddress: this.formBuilder.group({
        flatNumber:[''],
        houseNumber:[''],
        street: [''],
        city: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    })
    this.getCartItems();
    for (const items of this.cartItems) {
      this.total+=(items.price*items.quantity)
    }
  }
  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer').value)
    console.log(this.checkoutFormGroup.get('deliveryAddress').value)

  }
  getCartItems(){
    this.cartItems=this.cartService.cartItems;
  }
  expirationYear():number[]{
    let years:number[]=[];
    let date=new Date();
    for(let i = date.getFullYear();i<=date.getFullYear()+10;i++)
      years.push(i)
    return years;
  }
  expirationMonth():number[]{
    let months:number[]=[];
    let date = new Date();  
    if((date.getFullYear()<this.checkoutFormGroup.get('creditCard').value.expirationYear) ){
      for (let i = 1; i <= 12; i++){
        months.push(i)
        console.log(i)
        }
    } else{
      for (let i = date.getMonth() + 1; i <= 12; i++){
        console.log(i)
        months.push(i)
      }
     }
     return months
  }
}
