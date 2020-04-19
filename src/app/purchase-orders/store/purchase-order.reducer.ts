import * as fromRoot from '../../store/app.reducer';
import { PurchaseOrder } from '../models/purchase-order';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { PurchaseOrderFilterCriteria } from '../models/purchase-order-filter-criteria';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    purchaseOrderState: PurchaseOrderState;
}

export interface PurchaseOrderState {
    purchaseOrders: PurchaseOrder[];
    customers: Customer[];
    products: Product[];
    purchaseOrderFilterCriteria: PurchaseOrderFilterCriteria;
    error: string;
}

const initialFilter: PurchaseOrderFilterCriteria = {
    includeInactive: false,
        maxCreatedDate: null,
        minCreatedDate: null,
        revenueMax: NaN,
        revenueMin: NaN,
        customerIds: null,
        statuses: null,
}

const initialState: PurchaseOrderState = {
    purchaseOrders: [],
    customers: [],
    products: [],
    purchaseOrderFilterCriteria: initialFilter,
    error: '',
};

// Selectors
const getPurchaseOrderState = 
    createFeatureSelector<PurchaseOrderState>(fromRoot.Features.PurchaseOrders);

export const getPurchaseOrders = createSelector(
    getPurchaseOrderState,
    state => state.purchaseOrders
);

export const getCustomers = createSelector(
    getPurchaseOrderState,
    state => state.customers,
);

export const getProducts = createSelector(
    getPurchaseOrderState,
    state => state.products,
);

export const getFilterCriteria = createSelector(
    getPurchaseOrderState,
    state => state.purchaseOrderFilterCriteria,
);

export const getError = createSelector(
    getPurchaseOrderState,
    state => state.error,
);

// Reducer





    