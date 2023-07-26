import {inject, Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiBase = inject(ApiBaseService);

  listarPedidos(): Observable<PedidoRequest[]> {
    return this.apiBase.get<PedidoRequest[]>('/listaDePedidos');
  }

  crearPedido(body: PedidoRequest): Observable<PedidoRequest> {
    return this.apiBase.post<PedidoRequest>('/crearPedido', body);
  }

  modificarPedido(body: PedidoRequest): Observable<PedidoRequest> {
    return this.apiBase.put<PedidoRequest>('/modificarPedido', body);
  }


  eliminarPlato(id: number): Observable<any> {
    return this.apiBase.delete(`/plato/${id}`)
  }

  //TODO: A RESOLVER
  listarPedidosDeUsuario(idUsuario: number): Observable<PedidoRequest[]> {
    return this.apiBase.get<PedidoRequest[]>(`/pedidosDeUsuario/${idUsuario}`);
  }

  //TODO: A RESOLVER
  listarPedidosDeUsuario2(idUsuario: number) {
    return this.apiBase.get<PedidoRequest[]>(`/pedidosDeUsuario2/${idUsuario}`);
  }


}

export interface PedidoRequest {
  pedidoId: number;
  usuarioId: number;
  direccionId: number;
  pagoId: number;
  fechaPedido: Date;
  fechaEntrega: Date;
  fechaEntregaEstimada: Date;
  estadoPedidoId: number;
}
