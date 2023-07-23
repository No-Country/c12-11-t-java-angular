import {createActionGroup, props} from "@ngrx/store";
import {Order} from "../models/order.model";
import {CartStatus} from "../models/cart-state.model";
import {CartState} from "../models/cart.model";


export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'LoadCart': props<{ cart: CartState }>(),
    'Add Order': props<{ order: Order }>(),
    'Remove Order': props<{ order: Order }>(),
    'Set State': props<{ state: CartStatus }>(),
  },
});

