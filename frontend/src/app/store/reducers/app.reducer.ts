import {createReducer} from '@ngrx/store';
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

export const appReducer = createReducer(
  initialState,
);


