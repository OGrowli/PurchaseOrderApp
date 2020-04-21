import { PurchaseOrder } from '../../models/purchase-order';
import { PurchaseOrderStatus } from '../../models/purchase-order-status.enum';

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

  export function getStatusColor(status: PurchaseOrderStatus): string{
    switch(status){
      case PurchaseOrderStatus.Closed:
        return 	'#0e7802';
      case PurchaseOrderStatus.Recieved:
        return '#05c1eb';
      case PurchaseOrderStatus.Shipped:
        return '#07ab85';
      case PurchaseOrderStatus.WaitingForPayment:
        return '#780202';
      default:
        return 'gray';
    }
  }

  export function getStatusName(status: PurchaseOrderStatus): string{
    switch(status){
      case PurchaseOrderStatus.Closed:
        return 	'Closed';
      case PurchaseOrderStatus.Recieved:
        return 'Recieved';
      case PurchaseOrderStatus.Shipped:
        return 'Shipped';
      case PurchaseOrderStatus.WaitingForPayment:
        return 'WaitingForPayment';
    }
  }