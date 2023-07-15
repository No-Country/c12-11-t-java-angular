import {Order} from "@shared/interfaces/order.interface";

export interface ShoppingCart {
  orders: Order[];
  //idPedido:id
  //detalle:order[]
  total: number;
  state: string;//TODO: Por un estado de tipo enum [Nuevo,Preparando,Por Pagar,Finalizado]
}
