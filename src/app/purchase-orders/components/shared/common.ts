import { PurchaseOrder } from '../../models/purchase-order';

export function getDescription(order: PurchaseOrder){
    if (order.description){
      return order.description;
    }
    else if (order.lineItems && order.lineItems.length > 0){
      return order.lineItems.map(li => li.product.name).join(', ');
    }
    else{
      return 'nothing ordered';
    }
  }

  export function getRevenue(order: PurchaseOrder): number {
    let value = 0;
    for (const item of order.lineItems){
      value += item.product.price * item.quantity;
    }
    return value;
  }