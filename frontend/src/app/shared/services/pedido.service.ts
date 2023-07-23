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

  listarPedidosDeUsuario(idUsuario: number): Observable<PedidoRequest[]> {
    return this.apiBase.get<PedidoRequest[]>(`/pedidosDeUsuario/${idUsuario}`);
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
