import * as fromRoot from '../../store/app.reducer';
import { PurchaseOrder } from '../models/purchase-order';
import { Customer } from '../models/customer';
import { Product } from '../models/product';
import { PurchaseOrderFilterCriteria } from '../models/purchase-order-filter-criteria';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PurchaseOrderActions, PurchaseOrderActionTypes } from './purchase-order.actions';
import { PurchaseOrderStatus } from '../models/purchase-order-status.enum';

export interface State extends fromRoot.State {
    purchaseOrderState: PurchaseOrderState;
}

export interface PurchaseOrderState {
    purchaseOrders: PurchaseOrder[];
    customers: Customer[];
    products: Product[];
    currentPurchaseOrder: PurchaseOrder;
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
    currentPurchaseOrder: null,
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
export function purchaseOrderReducer(
    state = initialState,
    action: PurchaseOrderActions): PurchaseOrderState {
    switch (action.type) {
        case PurchaseOrderActionTypes.LoadPurchaseOrdersSuccess:
            return {
                ...state,
                purchaseOrders: action.payload,
                error: '',
            };
        case PurchaseOrderActionTypes.LoadPurchaseOrdersFail:
            return {
                ...state,
                error: action.payload,
            };
        case PurchaseOrderActionTypes.LoadSinglePurchaseOrderSuccess:
            return {
                ...state,
                currentPurchaseOrder: action.payload,
                error: '',
            };
        case PurchaseOrderActionTypes.LoadSinglePurchaseOrderFail:
            return {
                ...state,
                error: action.payload,
            };
        case PurchaseOrderActionTypes.UpdatePurchaseOrderSuccess:
            return {
                ...state,
                error: '',
            };
        case PurchaseOrderActionTypes.UpdatePurchaseOrderFail:
            return {
                ...state,
                error: action.payload,
            };
        case PurchaseOrderActionTypes.DeletePurchaseOrderSuccess:
            return {
                ...state,
                error: '',
            };
        case PurchaseOrderActionTypes.DeletePurchaseOrderFail:
            return {
                ...state,
                error: action.payload,
            };
        case PurchaseOrderActionTypes.LoadCustomersSuccess:
            return {
                ...state,
                customers: action.payload,
                error: '',
            };
        case PurchaseOrderActionTypes.LoadCustomersFail:
            return {
                ...state,
                error: action.payload,
            };
        case PurchaseOrderActionTypes.LoadProductsSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };
        case PurchaseOrderActionTypes.LoadProductsFail:
            return {
                ...state,
                error: '',
            };
        case PurchaseOrderActionTypes.PurchaseOrderClicked:
            return {
                ...state,
                currentPurchaseOrder: action.payload,
            }
        case PurchaseOrderActionTypes.ClearCurrentPurchaseOrder:
            return {
                ...state,
                currentPurchaseOrder: null,
            };
        case PurchaseOrderActionTypes.UpdateFilterCriteria:
            return {
                ...state,
                purchaseOrderFilterCriteria: action.payload,
            }
        case PurchaseOrderActionTypes.ClearFilterCriteria:
            return {
                ...state,
                purchaseOrderFilterCriteria: initialFilter
            }
        default:
            return state;
    }
}



    