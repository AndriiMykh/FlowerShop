import { Flower } from './flower';
import { FlowerCategory } from './flower-category';

export class CartItem {
    id: number ;
	name: string ;
	price: number ;
    imageURL: String ;

    quantity:number;
    constructor(flower:Flower){
        this.id=flower.id;
        this.name=flower.name;
        this.imageURL=flower.imageURL;
        this.price=flower.price;

        this.quantity=1;
    }
}
