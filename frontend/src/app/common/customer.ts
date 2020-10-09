import{Adress} from 'src/app/common/adress';
import{Card} from 'src/app/common/card';
import { Item } from '../components/check-out-form/check-out-form.component';
import { Flower } from './flower';

export class Customer {
    firstName:string;
    lastName:string;
    email:string;
    adress:Adress;
    card:Card;
    //flowers:Flower[]
    items:Item[];
}
