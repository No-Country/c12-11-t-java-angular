import {createReducer, on} from '@ngrx/store';
import {CartActions} from "../actions/cart.actions";
import {handleAddOrderToCart, handleChangeCartState, handleRemoveOrderToCart} from "./handlers/cart.handler";
import {CartState} from "../models/cart-state.model";
import {AppState} from "../models/app-state.model";

export const initialState: AppState = {
  cart: {
    orders: [],
    total: 0,
    state: CartState.New
  },
  user: {
    userId: -1,
    username: '',
    token: ''
  },
  loading: false,
  error: null
};


export const cartReducer = createReducer(
  initialState,
  on(CartActions.addOrder, handleAddOrderToCart),
  on(CartActions.removeOrder, handleRemoveOrderToCart),
  on(CartActions.setState, handleChangeCartState),
);


