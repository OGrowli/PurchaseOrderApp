import { purchaseOrderReducer } from '../store/purchase-order.reducer';
export enum PurchaseOrderStatus {
    Shipped,
    Recieved,
    WaitingForPayment,
    Closed,
}