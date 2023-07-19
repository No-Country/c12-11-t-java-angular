import {Order} from "./order.model";
import {CartState} from "./cart-state.model";


export interface Cart {
  orders: Order[];
  //idPedido:id
  //detalle:order[]
  total: number;
  state: CartState;
}

