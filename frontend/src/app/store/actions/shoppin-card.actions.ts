import {createAction, props} from "@ngrx/store";
import {ShoppingCart} from "@shared/interfaces/shopping-cart.interface";

/*Las acciones son los utilizados x los componentes/services para despachar un cambio al store*/
export const setShoppingCart = createAction(
  '[App] Set ShoppingCart',
  props<{ shoppingCart: ShoppingCart }>()
);
