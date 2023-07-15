import {ShoppingCart} from "@shared/interfaces/shopping-cart.interface";
import {ShoppingCartState} from "@shared/enums/shopping-cart-state.interface";

/*Este es el store|state de la app,
los cambios esta a debatir es solo de prueba */
export interface AppState {
  shoppingCart: ShoppingCart
  //usuario:Usuario TODO: A implementar -> login carga
  //plates:Plate[] TODO: A debatir: Potencialmente podria venir aca? asi se hace una sola request
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  shoppingCart: {
    orders: [],
    total: 0,
    state: ShoppingCartState.New
  },
  loading: false,
  error: null
};
