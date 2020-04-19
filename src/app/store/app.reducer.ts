import { createFeatureSelector, createSelector, Action } from '@ngrx/store';

export enum Features {
    PurchaseOrders = 'purchaseOrders',
    Root = 'root'
}

// State Declaration
export interface State {
    rootState: RootState;
}

export interface RootState {
    showRightSideNav: boolean;
}

const initialState: RootState = {
    showRightSideNav: false,
}



// Actions
export enum RootActionTypes {
    ToggleRightSideNav = "[Root] Toggle Right SideNav"
}

export class ToggleRightSideNav implements Action {
    readonly type = RootActionTypes.ToggleRightSideNav;
    constructor(public payload: boolean){ };
}

export type RootActions = ToggleRightSideNav

// selectors
const getRootState = createFeatureSelector<RootState>(Features.Root);

export const getShowRightSideNav = createSelector(
    getRootState,
    state => state.showRightSideNav
);

// Reducer

export function rootReducer(
    state = initialState,
    action: RootActions): RootState {
        switch(action.type) {
            case RootActionTypes.ToggleRightSideNav:
                return {
                    ...state,
                    showRightSideNav: action.payload
                };
            default:
                return state;
        }
    }
