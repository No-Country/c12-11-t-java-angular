import {createReducer, on} from '@ngrx/store';
import {CartActions} from "../actions/cart.actions";
import {
  handleAddOrderToCart,
  handleChangeCartState,
  handleLoadCart,
  handleRemoveOrderToCart
} from "./handlers/cart.handler";
import {CartStatus} from "../models/cart-state.model";
import {CartState} from "../models/cart.model";

export const initialState: CartState = {
  id: 0,
  orders: [],
  total: 0,
  state: CartStatus.New,
  loading: false,
  error: null
};


export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, handleLoadCart),
  on(CartActions.addOrder, handleAddOrderToCart),
  on(CartActions.removeOrder, handleRemoveOrderToCart),
  on(CartActions.setState, handleChangeCartState),
);


