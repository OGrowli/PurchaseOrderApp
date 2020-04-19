import { Product } from './product';

export interface ProductLineItem {
    lineItemNumber: number;
    productId: number;
    product: Product;
    quantity: number;
}
