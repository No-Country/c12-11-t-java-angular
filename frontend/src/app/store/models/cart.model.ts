import {Order} from "./order.model";
import {CartStatus} from "./cart-state.model";


export interface CartState {
  id: number;
  orders: Order[];
  total: number;
  state: CartStatus;
  loading: boolean;
  error: string | null;

}

