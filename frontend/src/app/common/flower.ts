import { FlowerCategory } from './flower-category';

export class Flower {
    id: number ;
	name: string ;
	price: number ;
    imageURL: String ;
    quantity:number;
    category: FlowerCategory;

    constructor(flower:Flower){
        this.id=flower.id;
        this.name=flower.name;
        this.imageURL=flower.imageURL;
        this.price=flower.price;

        this.quantity=1;
    }

}
