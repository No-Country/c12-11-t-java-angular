import {ShoppingCart} from "@shared/interfaces/shopping-cart.interface";

/*Este es el store|state de la app,
los cambios esta a debatir es solo de prueba */
export interface AppState {
  shoppingCart: ShoppingCart
  //historialCompra:HistorialCompra TODO: Manejamos un historial de compras?
  //usuario:Usuario TODO: A implementar -> login carga
  //plates:Plate[] TODO: A debatir: Potencialmente podria venir aca? asi se hace una sola request
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  shoppingCart: {
    orders: [],
    total: 0,
    state: 'Nuevo'
  },
  loading: false,
  error: null
};
