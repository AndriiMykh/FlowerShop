import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import{CustomValidator} from 'src/app/common/custom-validator';
import{Customer} from 'src/app/common/customer';
import{FormServiceService} from 'src/app/service/form-service.service'
import { Flower } from 'src/app/common/flower';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,private cartService:ShoppingCartService,
    private formService:FormServiceService) { }
  flowers:Flower[]=[];
  total:number=0;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  NumberPattern='^\\d+$';
  zipCodePattern='[0-9]{2}-[0-9]{3}';
  cardNumberPattern='[0-9]{16}';
  CVCPattern='[0-9]{3}';
  theCustomer:Customer;
  date: Date = new Date;
  items:Item[]=[];
  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName : new FormControl ('',[Validators.required, Validators.minLength(4),CustomValidator.notWhitespaces],),
        lastName: new FormControl ('',[Validators.required, Validators.minLength(4),CustomValidator.notWhitespaces]),
        email: new FormControl ('',[Validators.required,Validators.pattern(this.emailPattern)]),
      }),
      deliveryAddress: this.formBuilder.group({
        flatNumber: new FormControl ('',[Validators.required,Validators.pattern(this.NumberPattern)]),
        houseNumber:new FormControl ('',[Validators.required,Validators.pattern(this.NumberPattern)]),
        street: new FormControl ('',[Validators.required, Validators.minLength(3),CustomValidator.notWhitespaces]),
        city: new FormControl ('',[Validators.required, Validators.minLength(3),CustomValidator.notWhitespaces]),
        zipCode: new FormControl ('',[Validators.required,Validators.pattern(this.zipCodePattern)]),
      }),
      creditCard: this.formBuilder.group({
        nameOnCard: new FormControl ('',[Validators.required, Validators.minLength(4),CustomValidator.notWhitespaces]),
        cardNumber: new FormControl ('',[Validators.required,Validators.pattern(this.cardNumberPattern)]),
        securityCode: new FormControl ('',[Validators.required,Validators.pattern(this.CVCPattern)]),
        expirationMonth: new FormControl ('',Validators.required),
        expirationYear: new FormControl ('',Validators.required),
      })
    })
    this.getCartItems();
    for (const flowers of this.flowers) {
      this.total+=(flowers.price*flowers.quantity)
      let item = new Item();
      item.name= flowers.name
      item.quantity= flowers.quantity
      this.items.push(item)
    }
    for(const item of this.items){
      console.log("Item name:"+item.name)
      console.log("Item quantity:"+item.quantity)
    }
    
  }
  onSubmit() {
    //console.log(this.checkoutFormGroup.get('customer').value)
  //  console.log(this.checkoutFormGroup.get('deliveryAddress').value)
  //  console.log(this.checkoutFormGroup.get('creditCard').value)
   if(this.checkoutFormGroup.invalid){
     this.checkoutFormGroup.markAllAsTouched();
   }
   this.theCustomer=this.checkoutFormGroup.get('customer').value
   this.theCustomer.adress=this.checkoutFormGroup.get('deliveryAddress').value
   this.theCustomer.card=this.checkoutFormGroup.get('creditCard').value
   this.theCustomer.items=this.items
   console.log(this.theCustomer)
  this.formService.postCustomer(this.theCustomer).subscribe(
    data=>{
      console.log("created")
    }
  )
  }
  getCartItems(){
    this.flowers=this.cartService.cartItems;
  }
  pushExpirationYear():number[]{
    let years:number[]=[];
    let date=new Date();
    for(let i = date.getFullYear();i<=date.getFullYear()+10;i++)
      years.push(i)
    return years;
  }
  pushExpirationMonth():number[]{
    let months:number[]=[];
    let date = new Date();  
    if((date.getFullYear()<this.checkoutFormGroup.get('creditCard').value.expirationYear) ){
      for (let i = 1; i <= 12; i++){
        months.push(i)
        }
    } else{
      for (let i = date.getMonth() + 1; i <= 12; i++){
        months.push(i)
      }
     }
     return months
  }
  concatFirstNameLastNameToCard(event){
    if (event.target.checked) {
      this.checkoutFormGroup.controls.creditCard.get('nameOnCard').setValue(`${this.checkoutFormGroup.get('customer.firstName').value} ${this.checkoutFormGroup.get('customer.lastName').value}`)
    }else {
      this.checkoutFormGroup.controls.creditCard.get('nameOnCard').reset();
    }
  }
  get firstName(){return this.checkoutFormGroup.get('customer.firstName');}
  get lastName(){return this.checkoutFormGroup.get('customer.lastName');}
  get email(){return this.checkoutFormGroup.get('customer.email');}

  get flatNumber(){return this.checkoutFormGroup.get('deliveryAddress.flatNumber');}
  get houseNumber(){return this.checkoutFormGroup.get('deliveryAddress.houseNumber');}
  get street(){return this.checkoutFormGroup.get('deliveryAddress.street');}
  get city(){return this.checkoutFormGroup.get('deliveryAddress.city');}
  get zipCode(){return this.checkoutFormGroup.get('deliveryAddress.zipCode');}

  get nameOnCard(){return this.checkoutFormGroup.get('creditCard.nameOnCard');}
  get cardNumber(){return this.checkoutFormGroup.get('creditCard.cardNumber');}
  get securityCode(){return this.checkoutFormGroup.get('creditCard.securityCode');}
  get expirationMonth(){return this.checkoutFormGroup.get('creditCard.expirationMonth');}
  get expirationYear(){return this.checkoutFormGroup.get('creditCard.expirationYear');}
}
export class Item{
  private _quantity: number;
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}