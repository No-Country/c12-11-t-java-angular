import {Order} from "./order.model";
import {CartState} from "./cart-state.model";


export interface Cart {
  id: number;
  orders: Order[];
  total: number;
  state: CartState;
}

