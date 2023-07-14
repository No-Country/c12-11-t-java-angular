import {Order} from "@shared/interfaces/order.interface";

export interface ShoppingCart {
  orders: Order[];
  total: number;
  state: string;//TODO: Por un estado de tipo enum [Nuevo,Preparando,Por Pagar,Finalizado]
}
