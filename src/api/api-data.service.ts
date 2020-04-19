import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from 'src/app/purchase-orders/models/product';
import { Customer } from 'src/app/purchase-orders/models/customer';
import { PurchaseOrder } from 'src/app/purchase-orders/models/purchase-order';

import productsSeed from './products.json';
import customersSeed from './customers.json';
import purchaseOrdersSeed from './purchaseorders.json'; 

@Injectable({
  providedIn: 'root'
})
export class ApiDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let products: Product[] = productsSeed;
    let customers: Customer[] = customersSeed;
    let purchaseOrders: PurchaseOrder[] = purchaseOrdersSeed;

    return {products, customers, purchaseorders: purchaseOrders};
  }
}
