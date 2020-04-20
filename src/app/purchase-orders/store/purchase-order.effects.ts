import { PurchaseOrderService } from '../services/purchase-order.service';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { PurchaseOrderActionTypes } from './purchase-order.actions';
import { withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from './purchase-order.actions';
import * as selectors from './purchase-order.reducer';
import { PurchaseOrder } from '../models/purchase-order';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable()
export class PurchaseOrderEffects {

    constructor(
        private purchaseOrderService: PurchaseOrderService,
        private customerService: CustomerService,
        private productService: ProductService,
        private actions$: Actions,
        private store: Store<selectors.State>) { }
    
        @Effect()
        loadPurchaseOrders$ = this.actions$.pipe(
            ofType(PurchaseOrderActionTypes.LoadPurchaseOrders),
            withLatestFrom(this.store.pipe(select(selectors.getFilterCriteria))),
            switchMap(([action, criteria]) => this.purchaseOrderService.getPurchaseOrders(criteria).pipe(
                map((purchaseOrders: PurchaseOrder[]) => (new actions.LoadPurchaseOrdersSuccess(purchaseOrders))),
                catchError(err => of(new actions.LoadPurchaseOrdersFail(err)))
            )));
        @Effect()
        loadCustomers$ = this.actions$.pipe(
            ofType(PurchaseOrderActionTypes.LoadCustomers),
            switchMap((action: actions.LoadCustomers) => this.customerService.getCustomers().pipe(
                map((customers: Customer[]) => (new actions.LoadCustomerSuccess(customers))),
                catchError(err => of(new actions.LoadCustomersFail(err)))
            )));
        @Effect()
        loadProducts$ = this.actions$.pipe(
            ofType(PurchaseOrderActionTypes.LoadProducts),
            switchMap((action: actions.LoadProducts) => this.productService.getProducts().pipe(
                map((products: Product[]) => new actions.LoadProductsSuccess(products)),
                catchError(err => of(new actions.LoadProductsFail(err)))
            ))
        );
        @Effect()
        loadSinglePurchaseOrder$ = this.actions$.pipe(
            ofType(PurchaseOrderActionTypes.LoadSinglePurchaseOrder),
            switchMap((action: actions.LoadSinglePurchaseOrder) => this.purchaseOrderService.getPurchaseOrder(action.payload).pipe(
                map((purchaseOrder: PurchaseOrder) => (new actions.LoadSinglePurchaseOrderSuccess(purchaseOrder))),
                catchError(err => of(new actions.LoadSinglePurchaseOrderFail(err)))
            ))
        );
        @Effect()
        updateFilterCriteria$ = this.actions$.pipe(
            ofType(PurchaseOrderActionTypes.UpdateFilterCriteria, PurchaseOrderActionTypes.ClearFilterCriteria),
            switchMap((action: actions.UpdateFilterCriteria) => of(new actions.LoadPurchaseOrders()))
        );
}