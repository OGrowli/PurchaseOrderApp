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
    UpdatePurchaseOrder = '[Purchase Orders] Update PurchaseOrder',
    UpdatePurchaseOrderSuccess = '[Purchase Orders] Update PurchaseOrder Success',
    UpdatePurchaseOrderFail = '[Purchase Orders] Update PurchaseOrder Fail',
    DeletePurchaseOrder = '[Purchase Orders] Delete PurchaseOrder',
    DeletePurchaseOrderSuccess = '[Purchase Orders] Delete PurchaseOrder Success',
    DeletePurchaseOrderFail = '[Purchase Orders] Delete PurchaseOrder Fail',
    DeactivatePurchaseOrder = '[Purchase Orders] Deactivate PurchaseOrder',
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

export class UpdatePurchaseOrder implements Action {
    readonly type = PurchaseOrderActionTypes.UpdatePurchaseOrder;
    constructor(public payload: PurchaseOrder) { };
}

export class UpdatePurchaseOrderSuccess implements Action {
    readonly type = PurchaseOrderActionTypes.UpdatePurchaseOrderSuccess;
}

export class UpdatePurchaseOrderFail implements Action {
    readonly type = PurchaseOrderActionTypes.UpdatePurchaseOrderFail;
    constructor(public payload: string) { };
}

export class DeletePurchaseOrder implements Action {
    readonly type = PurchaseOrderActionTypes.DeletePurchaseOrder;
    constructor(public payload: number) { };
}

export class DeletePurchaseOrderSuccess implements Action {
    readonly type = PurchaseOrderActionTypes.DeletePurchaseOrderSuccess;
}

export class DeletePurchaseOrderFail implements Action {
    readonly type = PurchaseOrderActionTypes.DeletePurchaseOrderFail;
    constructor(public payload: string) { };
}

export class DeactivatePurchaseOrder implements Action {
    readonly type = PurchaseOrderActionTypes.DeactivatePurchaseOrder;
    constructor(public payload: PurchaseOrder) { };
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
    readonly type = PurchaseOrderActionTypes.ClearCurrentPurchaseOrder;
    constructor(public payload: PurchaseOrder){ }
}

export class UpdateFilterCriteria implements Action {
    readonly type = PurchaseOrderActionTypes.UpdateFilterCriteria;
    constructor(public payload: PurchaseOrderFilterCriteria){ }
}

export class ClearFilterCriteria implements Action {
    readonly type = PurchaseOrderActionTypes.ClearFilterCriteria;
    constructor(){ }
}


export type PurchaseOrderActions = LoadPurchaseOrders
| LoadPurchaseOrdersSuccess
| LoadPurchaseOrdersFail
| LoadSinglePurchaseOrder
| LoadSinglePurchaseOrderSuccess
| LoadSinglePurchaseOrderFail
| DeactivatePurchaseOrder
| UpdatePurchaseOrder
| UpdatePurchaseOrderSuccess
| UpdatePurchaseOrderFail
| DeletePurchaseOrder
| DeletePurchaseOrderSuccess
| DeletePurchaseOrderFail
| LoadCustomers
| LoadCustomerSuccess
| LoadCustomersFail
| LoadProducts
| LoadProductsSuccess
| LoadProductsFail
| PurchaseOrderClicked
| ClearCurrentPurchaseOrder
| UpdateFilterCriteria
| ClearFilterCriteria