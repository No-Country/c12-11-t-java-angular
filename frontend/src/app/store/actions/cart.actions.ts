import {createActionGroup, props} from "@ngrx/store";
import {Order} from "../models/order.model";
import {CartState} from "../models/cart-state.model";
import {Cart} from "../models/cart.model";


export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'InitCart': props<{ cart: Cart }>(),
    'Add Order': props<{ order: Order }>(),
    'Remove Order': props<{ order: Order }>(),
    'Set State': props<{ state: CartState }>(),
  },
});

