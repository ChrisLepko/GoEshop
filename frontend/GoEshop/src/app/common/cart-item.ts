import { Product } from './product';

export class CartItem {
    id: string;
    name: string;
    unitPrice: number;
    unitsInStock: number;
    pic: any;

    quantity: number;

    constructor(product: Product){
        this.id = product.id;
        this.name = product.name;
        this.unitPrice = product.unitPrice;
        this.unitsInStock = product.unitsInStock;
        this.pic = product.pic;

        this.quantity = 1;
    }

}
