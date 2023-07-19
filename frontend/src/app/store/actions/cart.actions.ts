import {createActionGroup, props} from "@ngrx/store";
import {Order} from "../models/order.model";
import {CartState} from "../models/cart-state.model";


export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Order': props<{ order: Order }>(),
    'Remove Order': props<{ order: Order }>(),
    'Set State': props<{ state: CartState }>(),
  },
});

