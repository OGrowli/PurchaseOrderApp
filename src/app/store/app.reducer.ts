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
    showRightSideNav: true,
}



// Actions
export enum RootActionTypes {
    SetShowRightSideNav = "[Root] Set Show Right SideNav"
}

export class SetShowRightSideNav implements Action {
    readonly type = RootActionTypes.SetShowRightSideNav;
    constructor(public payload: boolean){ };
}

export type RootActions = SetShowRightSideNav

// selectors
const getRootState = (state: State) => state.rootState;

export const getShowRightSideNav = createSelector(
    getRootState,
    state => state.showRightSideNav
);

// Reducer

export function rootReducer(
    state = initialState,
    action: RootActions): RootState {
        switch(action.type) {
            case RootActionTypes.SetShowRightSideNav:
                return {
                    ...state,
                    showRightSideNav: action.payload
                };
            default:
                return state;
        }
    }
