import {createReducer, on} from '@ngrx/store';
import {initialState} from "../state/app.state";
import {setShoppingCart} from "../actions/shoppin-card.actions";


/*En base a la accion despachada por la accion se hacen los cambios en el store/state
 [Aca ocurre la magia de los cambios]*/
export const appReducer = createReducer(
  initialState,
  on(setShoppingCart, (state, {shoppingCart}) => ({
    ...state,
    shoppingCart: shoppingCart,
  })),
);
