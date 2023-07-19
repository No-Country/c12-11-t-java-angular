import {inject, Injectable} from '@angular/core';
import {ApiBaseService} from './api-base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private apiBase = inject(ApiBaseService);

  listarPedidos(): Observable<PedidoRequest[]> {
    return this.apiBase.get<PedidoRequest[]>('/listaDePedidos');
  }

  crearPedido(body: PedidoRequest): Observable<PedidoRequest> {
    return this.apiBase.post<PedidoRequest>('/crearPedido', body);
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
