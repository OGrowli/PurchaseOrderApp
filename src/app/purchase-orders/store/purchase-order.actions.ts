import { Action } from '@ngrx/store';
import { PurchaseOrderFilterCriteria } from '../models/purchase-order-filter-criteria';
import { PurchaseOrder } from '../models/purchase-order';
import { Customer } from '../models/customer';
import { Product } from '../models/product';


export enum PurchaseOrderActionTypes {
    LoadPurchaseOrders = '[Purchase Orders] Load PurchaseOrders',
    LoadPurchaseOrdersSuccess = '[Purchase Orders] Load PurchaseOrders Success',
    LoadPurchaseOrdersFail = '[Purchase Orders] Load PurchaseOrders Fail',
    LoadSinglePurchaseOrder = '[Purchase Order] Load Single PurchaseOrder',
    LoadSinglePurchaseOrderSuccess = '[Purchase Orders] Load Single PurchaseOrderSuccess',
    LoadSinglePurchaseOrderFail = '[Purchase Orders] Load Single PurchaseOrder Fail',
    LoadCustomers = '[Purchase Orders] Load Customers',
    LoadCustomersSuccess = '[Purchase Orders] Load Customers Success',
    LoadCustomersFail = '[Purchase orders] LoadCustomersFail',
    LoadProducts = '[Purchase Orders] Load Products',
    LoadProductsSuccess = '[PurchaseOrders] LoadProductsSuccess',
    LoadProductsFail = '[PurchaseOrders] LoadProductsFail',
    PurchaseOrderClicked = '[Purchase Orders] Purchase Order Clicked',
    ClearCurrentPurchaseOrder = '[Purchase Orders] ClearCurrentPurchaseOrder',
    UpdateFilterCriteria = '[Purchase Orders] Update Filter Criteria',
    ClearFilterCriteria = '[Purchase Orders] Clear Filter Criteria',
}

export class LoadPurchaseOrders implements Action {
    readonly type = PurchaseOrderActionTypes.LoadPurchaseOrders;
    constructor(){ }
}

export class  LoadPurchaseOrdersSuccess implements Action {
    readonly type = PurchaseOrderActionTypes.LoadPurchaseOrdersSuccess;
    constructor(public payload: PurchaseOrder[]){ }
}

export class LoadPurchaseOrdersFail implements Action {
    readonly type = PurchaseOrderActionTypes.LoadPurchaseOrdersFail;
    constructor(public payload: string){ }
}

export class LoadSinglePurchaseOrder implements Action {
    readonly type = PurchaseOrderActionTypes.LoadSinglePurchaseOrder;
    constructor(public payload: number) { }
}

export class LoadSinglePurchaseOrderSuccess implements Action {
    readonly type = PurchaseOrderActionTypes.LoadSinglePurchaseOrderSuccess;
    constructor(public payload: PurchaseOrder) { }
}

export class LoadSinglePurchaseOrderFail implements Action {
    readonly type = PurchaseOrderActionTypes.LoadSinglePurchaseOrderFail;
    constructor(public payload: string) { }
}

export class LoadCustomers implements Action {
    readonly type = PurchaseOrderActionTypes.LoadCustomers;
}

export class LoadCustomerSuccess implements Action {
    readonly type = PurchaseOrderActionTypes.LoadCustomersSuccess;
    constructor(public payload: Customer[]){ }
}

export class LoadCustomersFail implements Action {
    readonly type = PurchaseOrderActionTypes.LoadCustomersFail;
    constructor(public payload: string){ }
}

export class LoadProducts implements Action {
    readonly type = PurchaseOrderActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
    readonly type = PurchaseOrderActionTypes.LoadProductsSuccess;
    constructor(public payload: Product[]){ }
}

export class LoadProductsFail implements Action {
    readonly type = PurchaseOrderActionTypes.LoadProductsFail;
    constructor(public payload: string){ }
}

export class PurchaseOrderClicked implements Action {
    readonly type = PurchaseOrderActionTypes.PurchaseOrderClicked;
    constructor(public payload: PurchaseOrder){ }
}

export class ClearCurrentPurchaseOrder implements Action {
    readonly type = PurchaseOrderActionTypes.PurchaseOrderClicked;
    constructor(public payload: PurchaseOrder){ }
}

export type PurchaseOrderActions = LoadPurchaseOrders
| LoadPurchaseOrdersSuccess
| LoadPurchaseOrdersFail
| LoadSinglePurchaseOrder
| LoadSinglePurchaseOrderSuccess
| LoadSinglePurchaseOrderFail
| LoadCustomers
| LoadCustomerSuccess
| LoadCustomersFail
| LoadProducts
| LoadProductsSuccess
| LoadProductsFail
| PurchaseOrderClicked
| ClearCurrentPurchaseOrder