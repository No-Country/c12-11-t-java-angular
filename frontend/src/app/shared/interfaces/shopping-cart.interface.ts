import {Order} from "@shared/interfaces/order.interface";
import {ShoppingCartState} from "@shared/enums/shopping-cart-state.interface";

export interface ShoppingCart {
  orders: Order[];
  //idPedido:id
  //detalle:order[]
  total: number;
  state: ShoppingCartState;
}
