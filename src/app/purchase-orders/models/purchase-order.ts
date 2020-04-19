import { ProductLineItem } from './product-line-item';
import { PurchaseOrderStatus } from './purchase-order-status.enum';
import { Customer } from './customer';

export interface PurchaseOrder {
    id: number;
    lineItems: ProductLineItem[];
    status: PurchaseOrderStatus;
    description: string;
    customer: Customer;
    customerId: number;
    isActive: boolean;
    created: Date;
}
