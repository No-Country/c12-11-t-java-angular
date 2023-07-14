import {createReducer, on} from '@ngrx/store';
import {initialState} from "../state/app.state";
import {addOrderToCart, setShoppingCart} from "../actions/shoppin-card.actions";


/*En base a la accion despachada por la accion se hacen los cambios en el store/state
 [Aca ocurre la magia de los cambios]*/
export const appReducer = createReducer(
  initialState,
  on(setShoppingCart, (state, {shoppingCart}) => ({
    ...state,
    shoppingCart: shoppingCart,
  })),
  on(addOrderToCart, (state, {order}) => ({
    ...state,
    shoppingCart: {
      orders: [...state.shoppingCart.orders, order],
      total: 0,
      state: 'Nuevo'
    }
  })),
);
