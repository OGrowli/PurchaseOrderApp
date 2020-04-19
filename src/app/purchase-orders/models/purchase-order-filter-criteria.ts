import { PurchaseOrderStatus } from './purchase-order-status.enum';

export interface PurchaseOrderFilterCriteria {
    includeInactive: boolean;
    maxCreatedDate: Date;
    minCreatedDate: Date;
    revenueMax: number;
    revenueMin: number;
    customerIds: number[];
    statuses: PurchaseOrderStatus[];
}