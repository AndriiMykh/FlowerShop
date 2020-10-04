import{Adress} from 'src/app/common/adress';
import{Card} from 'src/app/common/card';
import { CartItem } from './cart-item';
import { Flower } from './flower';
export class Customer {
    firstName:string;
    lastName:string;
    email:string;
    adress:Adress;
    card:Card;
    items:CartItem[]
}
