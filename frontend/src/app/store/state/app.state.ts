import {ShoppingCart} from "@shared/interfaces/shopping-cart.interface";
import {ShoppingCartState} from "@shared/enums/shopping-cart-state.interface";
import {User} from "@shared/interfaces/user.interface";

/*Este es el store|state de la app,
los cambios esta a debatir es solo de prueba */
export interface AppState {
  shoppingCart: ShoppingCart
  user: User
  //plates:Plate[] TODO: A debatir: Potencialmente podria venir aca? asi se hace una sola request
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  shoppingCart: new ShoppingCart(),
  user: {
    userId: -1,
    username: '',
    token: ''
  },
  loading: false,
  error: null
};
