import {Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {map, Observable} from 'rxjs';
import {Order} from "../../store/models/order.model";

@Injectable({
  providedIn: 'root'
})
export class PedidoDetalleService {


  constructor(private apiBase: ApiBaseService) {
  }

  public listarPedidoDetalle(): Observable<PedidoDetalleRequest[]> {
    return this.apiBase.get<PedidoDetalleRequest[]>('/listaDePedidoDetalle');
  }


  public crearPedidoDetalle(body: PedidoDetalleRequest): Observable<PedidoDetalleRequest> {
    return this.apiBase.post<PedidoDetalleRequest>('/crearPedidoDetalle', body);
  }

  public modificarPedidoDetalle(body: PedidoDetalleRequest): Observable<PedidoDetalleRequest> {
    return this.apiBase.put<PedidoDetalleRequest>('/modificarPedidoDetalle', body);
  }

  public eliminarPedidoDetalle(id: number): Observable<PedidoDetalleRequest> {

    return this.apiBase.delete<PedidoDetalleRequest>(`/eliminarPedidoDetalle/${id}`);
  }

  public consultarPedidosDetalleSegunPedido(id: number): Observable<Order[]> {

    return this.apiBase.get<Order[]>(`/consultarPedidosDetalleSegunPedido/${id}`);
  }


  public filtrarPorPedidoId(pedidoId: number): Observable<PedidoDetalleRequest[]> {
    return this.listarPedidoDetalle().pipe(
      map(pedidos => pedidos.filter(pedido => pedido.pedidoId === pedidoId))
    );
  }


  /*
    actualizarPlatoo(body: PlatoRequest): Observable<Plate> {
      return this.apiBase.put<Plate>('/plato', body);
    }

    eliminarPlato(idPlato: number): Observable<any> {
      return this.apiBase.delete(`/plato/${idPlato}`)
    }
    */


}

export interface PedidoDetalleRequest {
  pedidoDetalleId: number;
  pedidoId: number;
  platoId: number;
  cantidad: number;
  subTotal: number;
}
