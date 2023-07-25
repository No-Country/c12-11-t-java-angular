export interface Pedido {//PedidoDetalle
  pedidoId?: number;//idPedidoDetalle
  usuarioId?: number;
  direccionId?: number;
  pagoId?: number;
  fechaPedido?: string;
  fechaEntrega?:string;
  fechaEntregaEstimada?:string;
  estadoPedidoId?:string;
}
